import React from 'react'
import Web3 from 'web3'
import erc20abi from 'human-standard-token-abi'
import { dai_comp_pool } from 'abi/dai_compound_pool'
import { AbiItem } from 'web3-utils'

import { useDispatch, useAppState, setUtilization, setEpoch } from 'state'
import { SFI_DAI_COMPOUND_POOL, SFI_MAINNET } from 'models'
import { fromWei, toWei } from 'web3-utils'

interface Tuple {
  '0': string
  '1': string
}

const TUPLE_ZERO: Tuple = {
  '0': '0',
  '1': '1',
}

export function useTokenBalance() {
  const dispatch = useDispatch()
  const { provider, account } = useAppState()

  async function setData(web3: Web3) {
    const pool = new web3.eth.Contract(dai_comp_pool as AbiItem[], SFI_DAI_COMPOUND_POOL)
    const balances = await pool.methods.get_available_S_balances().call({ from: account })
    const epochParams = await pool.methods.get_epoch_cycle_params().call({ from: account })
    dispatch(setUtilization(balances))
    dispatch(setEpoch(epochParams))
    console.log(`[useTB] set to ${JSON.stringify(balances)} ${JSON.stringify(epochParams)}`)
  }

  React.useEffect(() => {
    if (provider) {
      console.log(`yohoo prov`)
      // web3.eth
      //   .subscribe('newBlockHeaders', (error, result) => {
      //     if (error) console.error(error)
      //   })
      //   .on('connected', (id) => {
      //     console.log(`subscription id ${id}`)
      //   })
      //   .on('data', (blockheader) => {
      //     console.log(`block ${blockheader.number}`)
      //     _getUtilized().then((res) => setUtil(res))
      //     _getCycleParams().then((cycle) => setCycle(cycle))
      //   })
      //   .on('error', console.error)
      const web3 = new Web3(provider)
      setData(web3)
    }
  }, [provider])
}
