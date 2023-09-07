import store from 'storejs'
import axios from '@/APIs/axios.ts'
import { USER } from '@/APIs/constants.ts'
import { useQuery } from '@tanstack/react-query'

export const fetchUser = async () => {
  const { data: user } = await axios.get<UserTypes>(USER.GET)
  store.set('user', user)
  return user
}

export const useGetUser = () => {
  const token = store.get('token')
  return useQuery(['user'], fetchUser, { enabled: Boolean(token) })
}

export const markDone = async (payload: any): Promise<UserTypes | boolean> => {
  const { data } = await axios.patch(USER.SETUP, payload)
  if (data.error) {
    console.log('Error marking setup done: ', data.error)
    return false
  }
  return data.data
}
