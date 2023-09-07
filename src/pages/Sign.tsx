import { Button } from '@/components/ui/button.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchUser } from '@/APIs/user.ts'
import { useEffect } from 'react'
import { Icons } from '@/data/Icons.tsx'
import store from 'storejs'

const Sign = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token') || store.get('token')
  if (token) store.set('token', token)
  const navigate = useNavigate()
  const googleAuthUrl = import.meta.env.VITE_GOOGLE_AUTH_URL
  const user = store.get('user')

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
        doneSetup: data.doneSetup,
      }
      store.set('user', user)
      return true
    }
    return false
  }

  useEffect(() => {
    const user = store.get('user')
    if (user?.id) return navigate('/insights')
    getAndSetUser().then((shouldRedirect) => {
      if (shouldRedirect) return navigate('/insights')
    })
  }, [])

  const googleAuth = () => {
    window.open(googleAuthUrl, '_self')
  }

  return (
    <div className={'flex'}>
      {!user?.id ? (
        <Button variant='outline' onClick={googleAuth}>
          <Icons.google width={'20px'} height={'20px'} />
          <p className={'pl-2'}>Sign in with google </p>
        </Button>
      ) : null}
    </div>
  )
}

export default Sign
