import { fromWei } from 'web3-utils'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const FORMAT = 'YYYY-MM-DD'

export const makeEthStringAmount = (eth: number, fixed = 4) => parseFloat(eth.toFixed(fixed)).toString()

export const weiToNum = (wei: string) => parseFloat(fromWei(wei)).toFixed(3)

export const daysFromNow = (date: string) => dayjs(date, FORMAT).diff(dayjs(), 'day')

export const dateFromNow = (days: number) => dayjs().add(Math.ceil(days), 'day').format(FORMAT)

export const getAavePrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/aave')
    const json = await response.json()
    return json.market_data.current_price.usd as string
  } catch (err) {
    console.log(`error getting aave price ${err}`)
  }
  return ''
}
