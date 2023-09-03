import axios from '@/APIs/axios.ts'
import { USER } from '@/APIs/constants.ts'

export const fetchUser = async () => {
  const { data } = await axios.get(USER.GET)

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
  const { data } = await axios.patch(USER.MARKDONE)
  if (data.error) {
    console.log('Error marking setup done: ', data.error)
    return false
  }
  return true
}
