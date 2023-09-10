import { Button } from '@/components/ui/button.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Icons } from '@/data/Icons.tsx'
import store from 'storejs'
import { useGetUser } from '@/APIs/user'

const SignIn = () => {
  const { search, state } = useLocation()
  const navigate = useNavigate()
  const googleAuthUrl = import.meta.env.VITE_GOOGLE_AUTH_URL
  const searchParams = new URLSearchParams(search)
  const token = searchParams.get('token')

  if (token) {
    store.set('token', token)
  }
  const { data: user } = useGetUser()

  useEffect(() => {
    if (user?.id) {
      navigate(state?.path || '/insights')
    }
  }, [user])

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

export default SignIn
