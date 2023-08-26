import { getUser } from '@/APIs/index.ts'

export const fetchUser = async () => {
  const token = localStorage.getItem('token')
  const { data } = await getUser({
    Authorization: 'Bearer ' + token || '',
  })
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
  }
  return user
}
