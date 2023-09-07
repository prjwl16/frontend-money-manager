import { Button } from '@/components/ui/button.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Icons } from '@/data/Icons.tsx'
import store from 'storejs'
import { useGetUser } from '@/APIs/user'

const Sign = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const googleAuthUrl = import.meta.env.VITE_GOOGLE_AUTH_URL
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')

  if (token) {
    store.set('token', token)
  }
  const { data: user } = useGetUser()
  console.log('🐬 ~ Sign ~ user:', user)

  useEffect(() => {
    if (user?.id) {
      navigate('/insights')
    }
  }, [user])

  const googleAuth = () => {
    window.open(googleAuthUrl, '_self')
  }

  console.count('root')

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
