import axios from '@/APIs/axios.ts'
import store from 'storejs'
import { USER } from '@/APIs/constants.ts'

const token = store.get('token')

export const fetchUser = async () => {
  const headers = { Authorization: `Bearer ${token}` }
  const { data } = await axios.get(USER.GET, { headers })

  if (data.error) {
    console.log('Error fetching user: ', data.error)
    return null
  }

  const user: UserTypes = {
    id: data.id,
    email: data.email,
    avatar: data.avatar,
    role: data.role,
    firstName: data.firstName,
    lastName: data.lastName,
    doneSetup: data.doneSetup,
  }
  return user
}

export const markDone = async (): Promise<boolean> => {
  const headers = { Authorization: `Bearer ${token}` }
  console.log('markDone: ', headers)
  const { data } = await axios.patch(USER.MARKDONE, {}, { headers })
  if (data.error) {
    console.log('Error marking setup done: ', data.error)
    return false
  }
  return true
}
