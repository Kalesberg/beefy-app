export const pools = [
  {
    id: 'cake-cake',
    logo: 'cake/CAKE',
    name: 'CAKE',
    token: 'CAKE',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-cake',
    earnedToken: 'mooCake',
    earnedTokenAddress: '0xc713ca7cb8edfE238ea652D772d41dde47A9a62d',
    earnContractAddress: '0xc713ca7cb8edfE238ea652D772d41dde47A9a62d',
    defaultApy: '9000.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 0.29,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-cake-bnb',
    logo: 'cake/CAKE-BNB',
    name: 'CAKE-BNB LP',
    token: 'CAKE-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mockCakeLP',
    earnedTokenAddress: '0x0000000000000000000000000000000000000000',
    earnContractAddress: '0x0000000000000000000000000000000000000000',
    defaultApy: '0.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-busd-bnb',
    logo: 'cake/BUSD-BNB',
    name: 'BUSD-BNB LP',
    token: 'BUSD-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mockCakeLP',
    earnedTokenAddress: '0x0000000000000000000000000000000000000000',
    earnContractAddress: '0x0000000000000000000000000000000000000000',
    defaultApy: '0.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-usdt-busd',
    logo: 'cake/USDT-BUSD',
    name: 'USDT-BUSD LP',
    token: 'USDT-BUSD LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mockCakeLP',
    earnedTokenAddress: '0x0000000000000000000000000000000000000000',
    earnContractAddress: '0x0000000000000000000000000000000000000000',
    defaultApy: '1.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'cake-btcb-bnb',
    logo: 'cake/BTCB-BNB',
    name: 'BTCB-BNB LP',
    token: 'BTCB-BNB LP',
    tokenDescription: 'Uses: Pancake',
    tokenAddress: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mockCakeLP',
    earnedTokenAddress: '0x0000000000000000000000000000000000000000',
    earnContractAddress: '0x0000000000000000000000000000000000000000',
    defaultApy: '1.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'Cake',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },
  
  {
    id: 'busd',
    logo: 'fortube/BUSD',
    name: 'BUSD',
    token: 'BUSD',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://www.paxos.com/busd/',
    earnedToken: 'mooBUSD',
    earnedTokenAddress: '0xD6fca61Edb1cD0259320A6E0899E8aD1044BBCda',
    earnContractAddress: '0xD6fca61Edb1cD0259320A6E0899E8aD1044BBCda',
    defaultApy: '15.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'BUSD/USD',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'link',
    logo: 'fortube/LINK',
    name: 'ChainLink',
    token: 'LINK',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://chain.link/',
    earnedToken: 'mooLINK',
    earnedTokenAddress: '0x7bF55acDe006C398Bb605Ae564A8F832F80000ee',
    earnContractAddress: '0x7bF55acDe006C398Bb605Ae564A8F832F80000ee',
    defaultApy: '20.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'LINK/USD',
    oraclePrice: 0,
    fallbackPrice: 12,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'dot',
    logo: 'fortube/DOT',
    name: 'DOT',
    token: 'DOT',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://polkadot.network/',
    earnedToken: 'mooDOT',
    earnedTokenAddress: '0x63a2CEF28904956552714ddb226ceE96c3F0C9EF',
    earnContractAddress: '0x63a2CEF28904956552714ddb226ceE96c3F0C9EF',
    defaultApy: '25.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'DOT/USD',
    oraclePrice: 0,
    fallbackPrice: 4.27,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'dai',
    logo: 'fortube/DAI',
    name: 'DAI',
    token: 'DAI',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://makerdao.com/',
    earnedToken: 'mooDAI',
    earnedTokenAddress: '0x0516a1AfcC4DE19eF0DcA635F3d19BBD5E3D3eCF',
    earnContractAddress: '0x0516a1AfcC4DE19eF0DcA635F3d19BBD5E3D3eCF',
    defaultApy: '10.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'DAI/USD',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'usdt',
    logo: 'fortube/USDT',
    name: 'USDT',
    token: 'USDT',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x55d398326f99059fF775485246999027B3197955',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://tether.to',
    earnedToken: 'mooUSDT',
    earnedTokenAddress: '0xc16187F3eb15aEE949e7d784906d53fd7E364B26',
    earnContractAddress: '0xc16187F3eb15aEE949e7d784906d53fd7E364B26',
    defaultApy: '12.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'USDT/USD',
    oraclePrice: 0,
    fallbackPrice: 1,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'eth',
    logo: 'fortube/ETH',
    name: 'ETH',
    token: 'ETH',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://ethereum.org/',
    earnedToken: 'mooETH',
    earnedTokenAddress: '0xc87049670329a82724e7135A26c73c3496a1Db23',
    earnContractAddress: '0xc87049670329a82724e7135A26c73c3496a1Db23',
    defaultApy: '10.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'ETH/USD',
    oraclePrice: 0,
    fallbackPrice: 414,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'btcb',
    logo: 'fortube/BTCB',
    name: 'BTCB',
    token: 'BTCB',
    tokenDescription: 'Uses: ForTube',
    tokenAddress: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://coinmarketcap.com/currencies/bitcoin-bep2/',
    earnedToken: 'mooBTCB',
    earnedTokenAddress: '0x6F0Df0858542fC4A1c7f82c14fAA490d7763592F',
    earnContractAddress: '0x6F0Df0858542fC4A1c7f82c14fAA490d7763592F',
    defaultApy: '7.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'band',
    oracleId: 'BTC/USD',
    oraclePrice: 0,
    fallbackPrice: 12995,
    depositsPaused: false,
    status: 'active',
  },

  {
    id: 'fry-burger-v2',
    logo: 'fry/BURGER',
    name: 'BURGER v2',
    token: 'BURGER',
    tokenDescription: 'Uses: fryWorld',
    tokenAddress: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/fryworld#farming-fries-with-burgers',
    earnedToken: 'mooFryBURGERv2',
    earnedTokenAddress: '0x2fd5f579e2cF9e3cb8127BBAd1B52c25750b1aCE',
    earnContractAddress: '0x2fd5f579e2cF9e3cb8127BBAd1B52c25750b1aCE',
    defaultApy: '200.00',
    unstableApy: false,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'burger-swap',
    oraclePrice: 0,
    fallbackPrice: 0.44,
    depositsPaused: false,
    status: 'active',
  },
  
  {
    id: 'drugs-guns',
    logo: 'thugs/GUNS',
    name: 'DRUGS GUNS v1',
    token: 'DRUGS',
    tokenDescription: 'Uses: Hoes Pool',
    tokenAddress: '0xfD26889cd6454D8751562f1c0FcF88b18B46F7B7',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/thugs#farming-guns-with-drugs',
    earnedToken: 'mooThugsGuns',
    earnedTokenAddress: '0x49263a1Ba199602a8Ef327B34a1AAe11a5FccaAf',
    earnContractAddress: '0x49263a1Ba199602a8Ef327B34a1AAe11a5FccaAf',
    defaultApy: '82000.00',
    unstableApy: true,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'pancake',
    oracleId: 'DRUGS',
    oraclePrice: 0,
    fallbackPrice: 0.11,
    depositsPaused: true,
    status: 'active',
  },

  {
    id: 'cake-twt',
    logo: 'cake/TWT',
    name: 'CAKE TWT v1',
    token: 'CAKE',
    tokenDescription: 'Uses: Syrup Pool',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-twt-with-cake',
    earnedToken: 'mooCakeTWT',
    earnedTokenAddress: '0x214e640c638fbe68Fb24e11BfBd8Cd7d6cb8E37b',
    earnContractAddress: '0x214e640c638fbe68Fb24e11BfBd8Cd7d6cb8E37b',
    defaultApy: '20000.00',
    unstableApy: true,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'pancakeswap-token',
    oraclePrice: 0,
    fallbackPrice: 0,
    depositsPaused: true,
    status: 'dead',
  },

  {
    id: 'cake-inj',
    logo: 'cake/INJ',
    name: 'CAKE INJ v1',
    token: 'CAKE',
    tokenDescription: 'Uses: Syrup Pool',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-inj-with-cake',
    earnedToken: 'mooCakeINJ',
    earnedTokenAddress: '0xD8bC83E80C88263b8494E8f48FdDEba6261C9B1c',
    earnContractAddress: '0xD8bC83E80C88263b8494E8f48FdDEba6261C9B1c',
    defaultApy: '20000.00',
    unstableApy: true,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'pancakeswap-token',
    oraclePrice: 0,
    fallbackPrice: 0.45,
    depositsPaused: true,
    status: 'active',
  },

  {
    id: 'cake-ctk',
    logo: 'cake/CTK',
    name: 'CAKE CTK v1',
    token: 'CAKE',
    tokenDescription: 'Uses: Syrup Pool',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    tokenDescriptionUrl: 'https://docs.beefy.finance/beefyfinance/products/pancake-swap#farming-ctk-with-cake',
    earnedToken: 'mooCakeCTK',
    earnedTokenAddress: '0x489afbAED0Ea796712c9A6d366C16CA3876D8184',
    earnContractAddress: '0x489afbAED0Ea796712c9A6d366C16CA3876D8184',
    defaultApy: '20000.00',
    unstableApy: true,
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tvl: 0,
    oracle: 'coingecko',
    oracleId: 'pancakeswap-token',
    oraclePrice: 0,
    fallbackPrice: 0.45,
    depositsPaused: true,
    status: 'active',
  },
];
