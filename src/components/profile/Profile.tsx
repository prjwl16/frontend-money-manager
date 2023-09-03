import { getUser } from '@/APIs/axios.ts'
import { useEffect } from 'react'

const Profile = () => {
  const fetchUser = async () => {
    // const user = await getUser();
  }

  useEffect(() => {}, [])

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
