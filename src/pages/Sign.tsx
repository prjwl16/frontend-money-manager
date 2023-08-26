import { Button } from '@/components/ui/button.tsx'
import useUserStore from '@/store/userStore.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchUser } from '@/APIs/user.ts'
import { useEffect } from 'react'

const Sign = () => {
  const { setUserData, userData } = useUserStore()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token') || localStorage.getItem('token')
  if (token) localStorage.setItem('token', token)
  const navigate = useNavigate()

  const getAndSetUser = async () => {
    if (token) {
      const data = await fetchUser()
      if (!data) return false
      const user: UserTypes = {
        id: data.id,
        email: data.email,
        avatar: data.avatar,
        role: data.role,
        firstName: data.firstName,
        lastName: data.lastName,
      }
      setUserData(user)
      return true
    }
    return false
  }

  useEffect(() => {
    if (userData?.id) return navigate('/insights')
    getAndSetUser().then((shouldRedirect) => {
      if (shouldRedirect) return navigate('/insights')
    })
  }, [])

  const googleAuth = () => {
    window.open('http://localhost:3000/oauth/google', '_self')
  }

  return (
    <div className={'flex'}>
      {!userData?.id ? (
        <Button variant='outline' onClick={googleAuth}>
          <img src='/google.svg' alt='google' className={'w-5 h-5 mr-2'} />
          Sign in with google
        </Button>
      ) : null}
    </div>
  )
}

export default Sign
