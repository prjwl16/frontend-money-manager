import axios from '@/APIs/axios.ts'
import { ACCOUNT } from '@/APIs/constants.ts'

export const getAccounts = async () => {
  const { data } = await axios.get(`${ACCOUNT.GET}`)
  if (data.error) {
    console.log('Error fetching category: ', data.error)
    return null
  }
  const categories: accountTypes[] = data.data
  return categories
}

export const addAccount = async (accounts: accountTypes[]) => {
  const { data } = await axios.post(`${ACCOUNT.GET}`, { data: accounts })
  if (data.error) {
    console.log('Error adding accounts: ', data.error)
    return null
  }
  const accountsData: accountTypes[] = data.data
  return accountsData
}
