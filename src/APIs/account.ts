import axios from '@/APIs/axios.ts'
import { ACCOUNT, CATEGORY } from '@/APIs/constants.ts'
import store from 'storejs'

const token = store.get('token')
const headers = { Authorization: `Bearer ${token}` }
export const getAccounts = async () => {
  const { data } = await axios.get(`${ACCOUNT.GET}`, { headers })
  if (data.error) {
    console.log('Error fetching category: ', data.error)
    return null
  }
  const categories: accountTypes[] = data.data
  return categories
}

export const addAccount = async (accounts: accountTypes[]) => {
  const { data } = await axios.post(`${ACCOUNT.GET}`, { headers, data: accounts })
  if (data.error) {
    console.log('Error adding accounts: ', data.error)
    return null
  }
  const accountsData: accountTypes[] = data.data
  return accountsData
}
