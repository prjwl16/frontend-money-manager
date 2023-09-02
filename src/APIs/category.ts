import axios from '@/APIs/axios.ts'
import store from 'storejs'
import { CATEGORY } from '@/APIs/constants.ts'

const token = store.get('token')

export const getCategories = async (): Promise<null | categoryTypes[]> => {
  const headers = { Authorization: `Bearer ${token}` }
  const { data } = await axios.get(`${CATEGORY.GET}`, { headers })
  if (data.error) {
    console.log('Error fetching category: ', data.error)
    return null
  }
  const categories: categoryTypes[] = data.data
  return categories
}
