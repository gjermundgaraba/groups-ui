import type { AppCurrency, ChainInfo } from '@keplr-wallet/types'

import { Bech32Address } from 'util/bech32'

const MPWR: AppCurrency = {
  coinDenom: 'mpwr',
  coinMinimalDenom: 'umpwr',
  coinDecimals: 6,
  coinGeckoId: 'mpwr',
  coinImageUrl:
    'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png',
}

/**
 *  @see https://github.com/cosmos/chain-registry/blob/master/regen/assetlist.json
 */
const currencies: AppCurrency[] = [MPWR]

/**
 * @see https://github.com/cosmos/chain-registry/blob/master/regen/chain.json
 */
export const empowerDevnet: ChainInfo = {
  rpc: `https://devnet2.empowerchain.io:26658`,
  rest: `https://devnet2.empowerchain.io:1318`,
  chainId: 'emp-devnet-2',
  chainName: 'EmpowerChain Devnet 2',
  stakeCurrency: MPWR,
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('empower'),
  currencies,
  feeCurrencies: currencies,
}
