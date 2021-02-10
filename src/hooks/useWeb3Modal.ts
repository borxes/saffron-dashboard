import React from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import erc20abi from 'human-standard-token-abi'

import { useDispatch, useAppState, setProvider, setAccount, setEthBalance, setWeb3 } from 'state'
import { Maybe } from 'models'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: 'https://mainnet.infura.io/v3/eb8762a055254f4c84dbd20977104169',
        42: 'wss://kovan.infura.io/ws/v3/eb8762a055254f4c84dbd20977104169',
      },
      infuraId: 'eb8762a055254f4c84dbd20977104169',
      bridge: 'https://bridge.walletconnect.org',
      qrcode: true,
      pollingInterval: 120000,
    },
  },
}

export function useWeb3Modal() {
  const { night, provider } = useAppState()
  const [web3Modal, setWeb3Modal] = React.useState<Maybe<Web3Modal>>(undefined)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const _web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: true, // optional
      providerOptions, // required
      disableInjectedProvider: false,
      theme: night ? 'dark' : 'light',
    })

    setWeb3Modal(_web3Modal)

    // if (provider && web3Modal) web3Modal.toggleModal()
  }, [night])

  React.useEffect(() => {
    if (provider && web3Modal) web3Modal.toggleModal()
  }, [provider, web3Modal])

  const fetchAccountData = React.useCallback(async () => {
    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider)

    try {
      // Get list of accounts of the connected wallet
      const accounts = await web3.eth.getAccounts()

      dispatch(setAccount(accounts[0]))

      if (accounts[0]) {
        const balance = await web3.eth.getBalance(accounts[0])
        dispatch(setEthBalance(web3.utils.fromWei(balance)))
      }
    } catch (err) {
      console.log(`Error fetching account data ${err}`)
    }
  }, [dispatch, provider])

  async function onConnect() {
    try {
      const _provider = await web3Modal?.connect()
      dispatch(setProvider(_provider))
      dispatch(setWeb3(new Web3(provider)))
    } catch (e) {
      console.log('Could not get a wallet connection', e)
      return
    }
  }

  async function onDisconnect() {
    try {
      if (provider && provider.close) await provider.close()
    } catch (err) {
      console.log('Error while disconnecting wallet: ', err)
    }
    web3Modal?.clearCachedProvider()
    dispatch(setProvider(undefined))
    dispatch(setAccount(''))
    dispatch(setEthBalance(''))
  }

  const refreshAccountData = React.useCallback(async () => {
    await fetchAccountData()
  }, [fetchAccountData])

  React.useEffect(() => {
    // Subscribe to accounts change
    if (provider) {
      provider.on('accountsChanged', () => {
        fetchAccountData()
      })

      // Subscribe to chainId change
      provider.on('chainChanged', () => {
        fetchAccountData()
      })

      // Subscribe to networkId change
      provider.on('networkChanged', () => {
        fetchAccountData()
      })

      refreshAccountData()
    }
  }, [provider, fetchAccountData, refreshAccountData])

  return { onConnect, onDisconnect }
}
