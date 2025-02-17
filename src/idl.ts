import type { Idl } from '@project-serum/anchor/dist/cjs/idl';

export const IDL: Idl = {
  version: '3.1.0',
  name: 'uxd',
  instructions: [
    {
      name: 'initializeController',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableMintDecimals',
          type: 'u8',
        },
      ],
    },
    {
      name: 'setRedeemableGlobalSupplyCap',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableGlobalSupplyCap',
          type: 'u128',
        },
      ],
    },
    {
      name: 'setMangoDepositoriesRedeemableSoftCap',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableSoftCap',
          type: 'u64',
        },
      ],
    },
    {
      name: 'setMangoDepositoryQuoteMintAndRedeemSoftCap',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'quoteMintAndRedeemSoftCap',
          type: 'u64',
        },
      ],
    },
    {
      name: 'registerMangoDepository',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'depositInsuranceToMangoDepository',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawInsuranceFromMangoDepository',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'rebalanceMangoDepositoryLite',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoRootBankQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBankQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVaultQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoRootBankCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBankCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVaultCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'maxRebalancingAmount',
          type: 'u64',
        },
        {
          name: 'polarity',
          type: {
            defined: 'PnlPolarity',
          },
        },
        {
          name: 'limitPrice',
          type: 'f32',
        },
      ],
    },
    {
      name: 'mintWithMangoDepository',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemable',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'collateralAmount',
          type: 'u64',
        },
        {
          name: 'limitPrice',
          type: 'f32',
        },
      ],
    },
    {
      name: 'redeemFromMangoDepository',
      accounts: [
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'collateralMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userCollateral',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemable',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoBids',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAsks',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoEventQueue',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableAmount',
          type: 'u64',
        },
        {
          name: 'limitPrice',
          type: 'f32',
        },
      ],
    },
    {
      name: 'quoteMintWithMangoDepository',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemable',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'quoteAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'quoteRedeemFromMangoDepository',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'redeemableMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'quoteMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userQuote',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userRedeemable',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoGroup',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoCache',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoSigner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoRootBank',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoNodeBank',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mangoPerpMarket',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mangoProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'redeemableAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'setMangoDepositoryQuoteMintAndRedeemFee',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'quoteFee',
          type: 'u8',
        },
      ],
    },
    {
      name: 'disableDepositoryMinting',
      accounts: [
        {
          name: 'authority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'controller',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'depository',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'disableMinting',
          type: 'bool',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'controller',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'redeemableMintBump',
            type: 'u8',
          },
          {
            name: 'version',
            type: 'u8',
          },
          {
            name: 'authority',
            type: 'publicKey',
          },
          {
            name: 'redeemableMint',
            type: 'publicKey',
          },
          {
            name: 'redeemableMintDecimals',
            type: 'u8',
          },
          {
            name: 'registeredMangoDepositories',
            type: {
              array: ['publicKey', 8],
            },
          },
          {
            name: 'registeredMangoDepositoriesCount',
            type: 'u8',
          },
          {
            name: 'redeemableGlobalSupplyCap',
            type: 'u128',
          },
          {
            name: 'mangoDepositoriesRedeemableSoftCap',
            type: 'u64',
          },
          {
            name: 'redeemableCirculatingSupply',
            type: 'u128',
          },
          {
            name: 'mangoDepositoriesQuoteRedeemableSoftCap',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'mangoDepository',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'unused',
            type: {
              array: ['u8', 2],
            },
          },
          {
            name: 'mangoAccountBump',
            type: 'u8',
          },
          {
            name: 'version',
            type: 'u8',
          },
          {
            name: 'collateralMint',
            type: 'publicKey',
          },
          {
            name: 'collateralMintDecimals',
            type: 'u8',
          },
          {
            name: 'unused2',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'quoteMint',
            type: 'publicKey',
          },
          {
            name: 'unused3',
            type: {
              array: ['u8', 32],
            },
          },
          {
            name: 'quoteMintDecimals',
            type: 'u8',
          },
          {
            name: 'mangoAccount',
            type: 'publicKey',
          },
          {
            name: 'controller',
            type: 'publicKey',
          },
          {
            name: 'insuranceAmountDeposited',
            type: 'u128',
          },
          {
            name: 'collateralAmountDeposited',
            type: 'u128',
          },
          {
            name: 'redeemableAmountUnderManagement',
            type: 'u128',
          },
          {
            name: 'totalAmountPaidTakerFee',
            type: 'u128',
          },
          {
            name: 'totalAmountRebalanced',
            type: 'u128',
          },
          {
            name: 'netQuoteMinted',
            type: 'i128',
          },
          {
            name: 'quoteMintAndRedeemFee',
            type: 'u8',
          },
          {
            name: 'totalQuoteMintAndRedeemFees',
            type: 'u128',
          },
          {
            name: 'mintingDisabled',
            type: 'bool',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'PnlPolarity',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Positive',
          },
          {
            name: 'Negative',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'InitializeControllerEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'authority',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'SetRedeemableGlobalSupplyCapEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableGlobalSupplyCap',
          type: 'u128',
          index: false,
        },
      ],
    },
    {
      name: 'RegisterMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'collateralMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mangoAccount',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'RegisterMangoDepositoryEventV2',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositoryVersion',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'collateralMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mangoAccount',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'SetMangoDepositoryRedeemableSoftCapEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'redeemableSoftCap',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'DepositInsuranceToDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositedAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'WithdrawInsuranceFromMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'insuranceMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'withdrawnAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'WithdrawInsuranceFromDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'quoteMintDecimals',
          type: 'u8',
          index: false,
        },
        {
          name: 'withdrawnAmount',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'MintWithMangoDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'collateralAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'limitPrice',
          type: 'f32',
          index: false,
        },
        {
          name: 'baseDelta',
          type: 'i64',
          index: false,
        },
        {
          name: 'quoteDelta',
          type: 'i64',
          index: false,
        },
        {
          name: 'feeDelta',
          type: 'i64',
          index: false,
        },
      ],
    },
    {
      name: 'RedeemFromDepositoryEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'redeemableAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'limitPrice',
          type: 'f32',
          index: false,
        },
        {
          name: 'baseDelta',
          type: 'i64',
          index: false,
        },
        {
          name: 'quoteDelta',
          type: 'i64',
          index: false,
        },
        {
          name: 'feeDelta',
          type: 'i64',
          index: false,
        },
      ],
    },
    {
      name: 'RebalanceMangoDepositoryLiteEvent',
      fields: [
        {
          name: 'version',
          type: 'u8',
          index: false,
        },
        {
          name: 'depositoryVersion',
          type: 'u8',
          index: false,
        },
        {
          name: 'controller',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'depository',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'user',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'polarity',
          type: {
            defined: 'PnlPolarity',
          },
          index: false,
        },
        {
          name: 'rebalancingAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'rebalancedAmount',
          type: 'u64',
          index: false,
        },
        {
          name: 'limitPrice',
          type: 'f32',
          index: false,
        },
        {
          name: 'baseDelta',
          type: 'i64',
          index: false,
        },
        {
          name: 'quoteDelta',
          type: 'i64',
          index: false,
        },
        {
          name: 'feeDelta',
          type: 'i64',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidRedeemableMintDecimals',
      msg: 'The redeemable mint decimals must be between 0 and 9 (inclusive).',
    },
    {
      code: 6001,
      name: 'InvalidRedeemableGlobalSupplyCap',
      msg: 'Redeemable global supply above.',
    },
    {
      code: 6002,
      name: 'RootBankIndexNotFound',
      msg: 'The associated mango root bank index cannot be found for the deposited coin..',
    },
    {
      code: 6003,
      name: 'InvalidLimitPrice',
      msg: 'The provided limit_price value is invalid, must be > 0',
    },
    {
      code: 6004,
      name: 'EffectiveOrderPriceBeyondLimitPrice',
      msg: 'Could not fill the order given order book state and provided slippage.',
    },
    {
      code: 6005,
      name: 'InvalidCollateralAmount',
      msg: 'Collateral amount cannot be 0',
    },
    {
      code: 6006,
      name: 'InvalidQuoteAmount',
      msg: 'Quote amount must be > 0 in order to mint.',
    },
    {
      code: 6007,
      name: 'InvalidRedeemableAmount',
      msg: 'Redeemable amount must be > 0 in order to redeem.',
    },
    {
      code: 6008,
      name: 'InsufficientCollateralAmount',
      msg: 'The balance of the collateral ATA is not enough to fulfill the mint operation.',
    },
    {
      code: 6009,
      name: 'InsufficientQuoteAmountMint',
      msg: 'The balance of the quote ATA is not enough to fulfil the mint operation.',
    },
    {
      code: 6010,
      name: 'InsufficientRedeemableAmountMint',
      msg: 'The balance of the redeemable ATA is not enough to fulfil the redeem operation.',
    },
    {
      code: 6011,
      name: 'InsufficientRedeemableAmount',
      msg: 'The balance of the redeemable ATA is not enough to fulfill the redeem operation.',
    },
    {
      code: 6012,
      name: 'PerpOrderPartiallyFilled',
      msg: 'The perp position could not be fully filled with the provided slippage.',
    },
    {
      code: 6013,
      name: 'RedeemableGlobalSupplyCapReached',
      msg: 'Minting amount would go past the Redeemable Global Supply Cap.',
    },
    {
      code: 6014,
      name: 'MangoDepositoriesSoftCapOverflow',
      msg: 'Operation not allowed due to being over the Mango Redeemable soft Cap.',
    },
    {
      code: 6015,
      name: 'MaxNumberOfMangoDepositoriesRegisteredReached',
      msg: 'Cannot register more mango depositories, the limit has been reached.',
    },
    {
      code: 6016,
      name: 'InvalidInsuranceAmount',
      msg: 'The amount to withdraw from the Insurance Fund must be superior to zero..',
    },
    {
      code: 6017,
      name: 'InsufficientAuthorityQuoteAmount',
      msg: "The Quote ATA from authority doesn't have enough balance.",
    },
    {
      code: 6018,
      name: 'InvalidRebalancedAmount',
      msg: 'The rebalanced amount must be superior to zero..',
    },
    {
      code: 6019,
      name: 'InsufficientOrderBookDepth',
      msg: 'Insufficient order book depth for order.',
    },
    {
      code: 6020,
      name: 'InvalidExecutedOrderSize',
      msg: 'The executed order size does not match the expected one.',
    },
    {
      code: 6021,
      name: 'InvalidMangoDepositoriesRedeemableSoftCap',
      msg: 'Mango depositories redeemable soft cap above.',
    },
    {
      code: 6022,
      name: 'InvalidQuoteDelta',
      msg: "Quote_lot_delta can't be 0.",
    },
    {
      code: 6023,
      name: 'InvalidOrderDirection',
      msg: "The perp order wasn't executed in the right direction.",
    },
    {
      code: 6024,
      name: 'MathError',
      msg: 'Math error.',
    },
    {
      code: 6025,
      name: 'SlippageReached',
      msg: "The order couldn't be executed with the provided slippage.",
    },
    {
      code: 6026,
      name: 'InvalidRebalancingAmount',
      msg: 'The rebalancing amount must be above 0.',
    },
    {
      code: 6027,
      name: 'InsufficientQuoteAmount',
      msg: 'The Quote amount in the provided user_quote ATA must be >= max_amount_rebalancing.',
    },
    {
      code: 6028,
      name: 'InvalidPnlPolarity',
      msg: "The PnL polarity provided is not the same as the perp position's one.",
    },
    {
      code: 6029,
      name: 'RebalancingError',
      msg: "The rebalanced amount doesn't match the expected rebalance amount.",
    },
    {
      code: 6030,
      name: 'BumpError',
      msg: 'A bump was expected but is missing.',
    },
    {
      code: 6031,
      name: 'OrderSizeBelowMinLotSize',
      msg: 'The order is below size is below the min lot size.',
    },
    {
      code: 6032,
      name: 'InvalidCollateralDelta',
      msg: "The collateral delta post perp order doesn't match the planned one.",
    },
    {
      code: 6033,
      name: 'MangoPerpMarketIndexNotFound',
      msg: 'The perp market index could not be found for this MangoMarkets Pair.',
    },
    {
      code: 6034,
      name: 'InvalidMangoGroup',
      msg: 'Could not load the provided MangoGroup account.',
    },
    {
      code: 6035,
      name: 'QuantityBelowContractSize',
      msg: 'The order quantity is below contract_size of the perp market.',
    },
    {
      code: 6036,
      name: 'QuoteAmountTooHigh',
      msg: 'The amount trying to be quote minted is larger than quote mintable.',
    },
    {
      code: 6037,
      name: 'RedeemableAmountTooHigh',
      msg: 'The amount trying to be quote redeemed is larger than quote redeemable.',
    },
    {
      code: 6038,
      name: 'MintingDisabled',
      msg: 'Minting is disabled for the current depository',
    },
    {
      code: 6039,
      name: 'MintingAlreadyDisabledOrEnabled',
      msg: 'Minting is already disabled/enabled',
    },
    {
      code: 6040,
      name: 'QuoteAmountExceedsSoftCap',
      msg: 'The quote amount requested is beyond the soft cap limitation.',
    },
    {
      code: 6041,
      name: 'InvalidQuoteCurrency',
      msg: 'The quote currency is not the expected one.',
    },
    {
      code: 6042,
      name: 'InvalidAuthority',
      msg: 'Only the Program initializer authority can access this instructions.',
    },
    {
      code: 6043,
      name: 'InvalidController',
      msg: "The Depository's controller doesn't match the provided Controller.",
    },
    {
      code: 6044,
      name: 'InvalidDepository',
      msg: 'The Depository provided is not registered with the Controller.',
    },
    {
      code: 6045,
      name: 'InvalidCollateralMint',
      msg: "The provided collateral mint does not match the depository's collateral mint.",
    },
    {
      code: 6046,
      name: 'InvalidQuoteMint',
      msg: "The provided quote mint does not match the depository's quote mint.",
    },
    {
      code: 6047,
      name: 'InvalidMangoAccount',
      msg: "The Mango Account isn't the Depository one.",
    },
    {
      code: 6048,
      name: 'InvalidRedeemableMint',
      msg: "The Redeemable Mint provided does not match the Controller's one.",
    },
    {
      code: 6049,
      name: 'InvalidDexMarket',
      msg: 'The provided perp_market is not the one tied to this Depository.',
    },
    {
      code: 6050,
      name: 'InvalidOwner',
      msg: 'The provided token account is not owner by the expected party.',
    },
    {
      code: 6051,
      name: 'InvalidMaxBaseQuantity',
      msg: 'The max base quantity must be above 0.',
    },
    {
      code: 6052,
      name: 'InvalidMaxQuoteQuantity',
      msg: 'The max quote quantity must be above 0.',
    },
    {
      code: 6053,
      name: 'Default',
      msg: 'Default - Check the source code for more info.',
    },
  ],
};
