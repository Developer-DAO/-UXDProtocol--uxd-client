import {
  I80F48,
  MangoAccount,
  nativeI80F48ToUi,
  nativeToUi,
  Payer,
  PerpMarket,
  PerpMarketConfig,
} from '@blockworks-foundation/mango-client';
import { BorshAccountsCoder } from '@project-serum/anchor';
import { ConfirmOptions, Connection, PublicKey } from '@solana/web3.js';
import { Mango } from '.';
import { UXD_DECIMALS } from '../utils';
import { IDL } from '../idl';
import { MangoDepositoryAccount } from '../interfaces';

export const SLIPPAGE_BASIS = 1000;

export class MangoDepository {
  public pda: PublicKey;
  public mangoAccountPda: PublicKey;
  public collateralMint: PublicKey;
  public collateralMintSymbol: string;
  public collateralMintDecimals: number;
  public quoteMint: PublicKey;
  public quoteMintSymbol: string;
  public quoteMintDecimals: number;
  // Internals
  mangoAccount?: MangoAccount;

  public constructor(
    mint: PublicKey,
    mintName: string,
    mintDecimals: number,
    quoteMint: PublicKey,
    quoteMintName: string,
    quoteMintDecimals: number,
    uxdProgramId: PublicKey
  ) {
    this.collateralMint = mint;
    this.collateralMintSymbol = mintName;
    this.collateralMintDecimals = mintDecimals;
    this.quoteMint = quoteMint;
    this.quoteMintSymbol = quoteMintName;
    this.quoteMintDecimals = quoteMintDecimals;
    [this.pda] = PublicKey.findProgramAddressSync(
      [Buffer.from('MANGODEPOSITORY'), mint.toBuffer()],
      uxdProgramId
    );
    [this.mangoAccountPda] = PublicKey.findProgramAddressSync(
      [Buffer.from('MANGOACCOUNT'), mint.toBuffer()],
      uxdProgramId
    );
  }

  public info() {
    console.groupCollapsed(
      '[Depository debug info - Collateral mint:',
      this.collateralMintSymbol,
      ' - decimals',
      this.collateralMintDecimals,
      ']'
    );
    console.table({
      ['pda']: this.pda.toString(),
      ['collateralMint']: this.collateralMint.toString(),
      ['collateralMintSymbol']: this.collateralMintSymbol.toString(),
      ['collateralMintDecimals']: this.collateralMintDecimals.toString(),
      ['quoteMint']: this.quoteMint.toString(),
      ['quoteMintSymbol']: this.quoteMintSymbol.toString(),
      ['quoteMintDecimals']: this.quoteMintDecimals.toString(),
      ['MangoAccountPda']: this.mangoAccountPda.toString(),
    });
    console.groupEnd();
  }

  // MARK: - Helpers ----------------------------------------------------------

  // Load or reload
  async getMangoAccount(mango: Mango): Promise<MangoAccount> {
    if (!this.mangoAccount) {
      this.mangoAccount = await mango.load(this.mangoAccountPda);
      return this.mangoAccount;
    } else {
      return mango.reload(this.mangoAccount);
    }
  }

  getPerpMarketConfig(mango: Mango): PerpMarketConfig {
    return mango.getPerpMarketConfig(this.collateralMintSymbol);
  }

  getPerpMarket(mango: Mango): Promise<PerpMarket> {
    const pmc = this.getPerpMarketConfig(mango); // perpMarketConfig
    return mango.client.getPerpMarket(
      pmc.publicKey,
      pmc.baseDecimals,
      pmc.quoteDecimals
    );
  }

  // MARK: - Public -----------------------------------------------------------

  public async getOnchainAccount(
    connection: Connection,
    options: ConfirmOptions
  ): Promise<MangoDepositoryAccount> {
    const coder = new BorshAccountsCoder(IDL);
    const result = await connection.getAccountInfo(
      this.pda,
      options.commitment
    );
    if (!result) {
      throw new Error('mangoDepositoryAccount not found');
    }
    return coder.decode('mangoDepository', result.data);
  }

  public async getCollateralOraclePrice(mango: Mango): Promise<I80F48> {
    const mangoCache = await mango.getCache();
    const tokenIndex = mango.group.getTokenIndex(this.collateralMint);
    const price = mango.group.getPriceNative(tokenIndex, mangoCache);
    return price;
  }

  public async getCollateralOraclePriceUI(mango: Mango): Promise<number> {
    const mangoCache = await mango.getCache();
    const tokenIndex = mango.group.getTokenIndex(this.collateralMint);
    const price = mango.group.getPriceUi(tokenIndex, mangoCache);
    return price;
  }

  public async getCollateralPerpPriceUI(mango: Mango): Promise<number> {
    const mangoCache = await mango.getCache();
    const pmc = this.getPerpMarketConfig(mango); // perpMarketConfig
    const pmi = pmc.marketIndex; // perpMarketIndex
    const price = mango.group.getPrice(pmi, mangoCache);
    return price.toNumber();
  }

  // Native
  public async getCollateralBalance(mango: Mango): Promise<I80F48> {
    const ma = await this.getMangoAccount(mango);
    return mango.mangoAccountSpotBalanceFor(
      this.collateralMint,
      this.collateralMintSymbol,
      ma
    );
  }

  public async getQuoteBalanceUI(mango: Mango): Promise<number> {
    return nativeI80F48ToUi(
      await this.getQuoteBalance(mango),
      this.quoteMintDecimals
    ).toNumber();
  }

  public async getQuoteBalance(mango: Mango): Promise<I80F48> {
    const mangoAccount = await mango.load(this.mangoAccountPda);
    return mango.mangoAccountSpotBalanceQuote(mangoAccount);
  }

  public async getInsuranceBalanceUI(mango: Mango): Promise<number> {
    return nativeI80F48ToUi(
      await this.getInsuranceBalance(mango),
      this.quoteMintDecimals
    ).toNumber();
  }

  public getInsuranceBalance(mango: Mango): Promise<I80F48> {
    return this.getQuoteBalance(mango);
    // const ma = await this.getMangoAccount(mango);
    // return mango.mangoAccountSpotBalanceFor(
    //   this.quoteMint,
    //   this.quoteMintSymbol,
    //   ma
    // );
  }

  // Return the taker_fee for the collateral perp
  public getCollateralPerpTakerFees(mango: Mango): number {
    const perpMarketConfig = this.getPerpMarketConfig(mango);
    const perpMarketIndex = perpMarketConfig.marketIndex;
    return mango.group.perpMarkets[perpMarketIndex].takerFee.toNumber();
  }

  public getCollateralPerpQuoteLotSize(mango: Mango): number {
    const perpMarketConfig = this.getPerpMarketConfig(mango);
    const perpMarketIndex = perpMarketConfig.marketIndex;
    return mango.group.perpMarkets[perpMarketIndex].quoteLotSize.toNumber();
  }

  public getCollateralPerpBaseLotSize(mango: Mango): number {
    const perpMarketConfig = this.getPerpMarketConfig(mango);
    const perpMarketIndex = perpMarketConfig.marketIndex;
    return mango.group.perpMarkets[perpMarketIndex].baseLotSize.toNumber();
  }

  public getMinTradingSizeCollateralUI(mango: Mango): number {
    const perpBaseLotSize = this.getCollateralPerpBaseLotSize(mango);
    return nativeToUi(perpBaseLotSize, this.collateralMintDecimals);
  }

  public async getMinTradingSizeQuoteUI(mango: Mango): Promise<number> {
    const [collateralPerpPriceUI, minTradingSizeCollateralUI] =
      await Promise.all([
        this.getCollateralPerpPriceUI(mango),
        this.getMinTradingSizeCollateralUI(mango),
      ]);
    return minTradingSizeCollateralUI * collateralPerpPriceUI;
  }

  public getMinMintSizeQuoteUI(mango: Mango): Promise<number> {
    return this.getMinTradingSizeQuoteUI(mango);
  }

  // Fees are factored in
  public async getMinRedeemSizeQuoteUI(mango: Mango): Promise<number> {
    return (await this.getMinTradingSizeQuoteUI(mango)) * 1.1;
  }

  public async getDeltaNeutralPositionNotionalSizeUI(
    mango: Mango
  ): Promise<number> {
    const ma = await this.getMangoAccount(mango); // mangoAccount
    const pmc = this.getPerpMarketConfig(mango); // perpMarketConfig
    const pm = await this.getPerpMarket(mango); // perpMarket
    const pa = ma.perpAccounts[pmc.marketIndex]; // perpAccount
    // Need to use the base and taker base as it might not be settled yet
    const basePosition = pm?.baseLotsToNumber(
      pa.basePosition.add(pa.takerBase)
    );
    const indexPrice = await this.getCollateralPerpPriceUI(mango);
    return Math.abs(basePosition * indexPrice);
  }

  // heavy
  public async getUnrealizedPnl(
    mango: Mango,
    options: ConfirmOptions
  ): Promise<number> {
    // Do the lengthy operation first to have the most up to date price
    const depositoryOnchainAccount = await this.getOnchainAccount(
      mango.client.connection,
      options
    );
    const redeemableAmountUnderManagementUi = nativeToUi(
      depositoryOnchainAccount.redeemableAmountUnderManagement.toNumber(),
      UXD_DECIMALS
    ); // Here should inject controller to be nice

    const deltaNeutralPositionNotionalSize =
      await this.getDeltaNeutralPositionNotionalSizeUI(mango);
    const unrealizedPnl =
      redeemableAmountUnderManagementUi - deltaNeutralPositionNotionalSize;
    return unrealizedPnl;
  }

  public async getOffsetUnrealizedPnl(
    mango: Mango,
    options: ConfirmOptions
  ): Promise<number> {
    // Do the lengthy operation first to have the most up to date price
    const depositoryOnchainAccount = await this.getOnchainAccount(
      mango.client.connection,
      options
    );
    const redeemableAmountUnderManagementUi = nativeToUi(
      depositoryOnchainAccount.redeemableAmountUnderManagement.toNumber(),
      UXD_DECIMALS
    ); // Here should inject controller to be nice

    const deltaNeutralPositionNotionalSize =
      await this.getDeltaNeutralPositionNotionalSizeUI(mango);
    const unrealizedPnl =
      redeemableAmountUnderManagementUi - deltaNeutralPositionNotionalSize;
    const netQuoteMintedUi = nativeToUi(
      depositoryOnchainAccount.netQuoteMinted.toNumber(),
      UXD_DECIMALS
    );
    return unrealizedPnl + netQuoteMintedUi;
  }

  public async getFundingRate(mango: Mango): Promise<number> {
    const pmc = this.getPerpMarketConfig(mango); // perpMarketConfig
    const pm = await this.getPerpMarket(mango); // perpMarket
    const mc = await mango.getCache();
    const pmi = pmc.marketIndex;
    const bids = await pm.loadBids(mango.client.connection);
    const asks = await pm.loadAsks(mango.client.connection);

    return pm.getCurrentFundingRate(mango.group, mc, pmi, bids, asks);
  }

  // This call allow to "settle" the paper profits of the depository. Anyone can call it, result is that it settle a particular account
  // with any other accounts it finds, to settle (redeem) paper-profits or losses
  public async settleMangoDepositoryMangoAccountPnl(
    payer: Payer,
    mango: Mango
  ): Promise<string | null> {
    const ma = await mango.load(this.mangoAccountPda); // mangoAccount
    const pmc = this.getPerpMarketConfig(mango); // perpMarketConfig
    const mc = await mango.group.loadCache(mango.client.connection); // mangoCache
    const pm = await mango.client.getPerpMarket(
      pmc.publicKey,
      pmc.baseDecimals,
      pmc.quoteDecimals
    ); // perpMarket
    const quoteRootBank = await mango.getQuoteRootBank();
    const price = mc.priceCache[pmc.marketIndex].price;

    return mango.client.settlePnl(
      mango.group,
      mc,
      ma,
      pm,
      quoteRootBank,
      price,
      payer
    );
  }

  // Return the price of 1 base native unit expressed in quote native units
  // This is the format of the on chain program input parameter
  async getCollateralPerpPriceNativeQuotePerNativeBase(
    mango: Mango
  ): Promise<I80F48> {
    const mangoCache = await mango.getCache();
    const pmc = this.getPerpMarketConfig(mango); // perpMarketConfig
    const pmi = pmc.marketIndex; // perpMarketIndex
    return mango.group.getPriceNative(pmi, mangoCache);
  }

  // The side of the taker (the user)
  async getLimitPrice(
    slippage: I80F48,
    perpOrderTakerSide: 'short' | 'long',
    mango: Mango
  ): Promise<I80F48> {
    const price = await this.getCollateralPerpPriceNativeQuotePerNativeBase(
      mango
    );
    const delta = price.mul(slippage.div(I80F48.fromNumber(SLIPPAGE_BASIS)));
    switch (perpOrderTakerSide) {
      case 'short': {
        return price.sub(delta);
      }
      case 'long': {
        return price.add(delta);
      }
    }
  }
}
