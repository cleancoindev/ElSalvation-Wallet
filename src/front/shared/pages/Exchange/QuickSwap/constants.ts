import config from 'app-config'

export const SOURCE_MODE_SLIPPAGE = {
  MAX: 50,
  FAIL: 0.5,
  FRONTRUN: 10,
}

export const COIN_DECIMALS = 18
export const GWEI_DECIMALS = 9
export const MAX_PERCENT = 100
export const SEC_PER_MINUTE = 60

export const SWAP_API = {
  1: {
    name: 'zeroxEthereum',
    spender: 'zerox',
  },
  11155111: {
    name: 'zeroxSepolia',
    spender: 'zeroxSepolia',
  },
  56: {
    name: 'zeroxBsc',
    spender: 'zerox',
  },
  137: {
    name: 'zeroxPolygon',
    spender: 'zerox',
  },
  80001: {
    name: 'zeroxMumbai',
    spender: 'zeroxMumbai',
  },
  250: {
    name: 'zeroxFantom',
    spender: 'zeroxFantom',
  },
  43114: {
    name: 'zeroxAvalanche',
    spender: 'zerox',
  },
  42161: {
    name: 'zeroxArbitrum',
    spender: 'zerox',
  },
}

export const API_GAS_LIMITS = {
  MAX_PRICE: '30_000',
  MIN_LIMIT: '100_000',
  MAX_LIMIT: '11_500_000',
}

export const LIQUIDITY_SOURCE_DATA = {
  [config.evmNetworks.ETH.networkVersion]: {
    name: 'Uniswap V2',
    router: config.swapContract.uniswapRouter,
    factory: config.swapContract.uniswapFactory,
  },
  [config.evmNetworks.BNB.networkVersion]: {
    name: 'PancakeSwap',
    router: config.swapContract.pancakeswapRouter,
    factory: config.swapContract.pancakeswapFactory,
  },
  [config.evmNetworks.MATIC.networkVersion]: {
    name: 'SushiSwap',
    router: config.swapContract.sushiswapRouter,
    factory: config.swapContract.sushiswapFactory,
  },
  [config.evmNetworks.XDAI.networkVersion]: {
    name: 'HoneySwap',
    router: config.swapContract.honeyswapRouter,
    factory: config.swapContract.honeyswapFactory,
  },
  [config.evmNetworks.FTM.networkVersion]: {
    name: 'SpiritSwap',
    router: config.swapContract.spiritSwapRouter,
    factory: config.swapContract.spiritSwapFactory,
  },
  [config.evmNetworks.AVAX.networkVersion]: {
    name: 'PangolinSwap',
    router: config.swapContract.pangolinSwapRouter,
    factory: config.swapContract.pangolinSwapFactory,
  },
  [config.evmNetworks.MOVR.networkVersion]: {
    name: 'SushiSwap',
    router: config.swapContract.sushiSwapRouter,
    factory: config.swapContract.sushiSwapFactory,
  },
  [config.evmNetworks.ONE.networkVersion]: {
    name: 'ViperSwap',
    router: config.swapContract.viperSwapRouter,
    factory: config.swapContract.viperSwapFactory,
  },
  [config.evmNetworks.AURETH.networkVersion]: {
    name: 'Trisolaris',
    router: config.swapContract.trisolarisRouter,
    factory: config.swapContract.trisolarisFactory,
  },
  [config.evmNetworks.PHI_V1.networkVersion]: {
    name: 'PHIv1 Swap',
    router: config.swapContract.phi_v1Router,
    factory: config.swapContract.phi_v1Factory,
  },
  [config.evmNetworks.PHI.networkVersion]: {
    name: 'PHI Swap',
    router: config.swapContract.phiRouter,
    factory: config.swapContract.phiFactory,
  },
  [config.evmNetworks.FKW.networkVersion]: {
    name: 'FKW Swap',
    router: config.swapContract.fkwRouter,
    factory: config.swapContract.fkwFactory,
  },
  [config.evmNetworks.PHPX.networkVersion]: {
    name: 'PHPX Swap',
    router: config.swapContract.phpxRouter,
    factory: config.swapContract.phpxFactory,
  },
  [config.evmNetworks.AME.networkVersion]: {
    name: 'AME Swap',
    router: config.swapContract.ameRouter,
    factory: config.swapContract.ameFactory,
  },
}
