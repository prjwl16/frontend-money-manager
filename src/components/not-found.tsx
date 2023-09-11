import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { ROUTES } from '@/lib/routes'
import { useUser } from '@/hooks/useUser'

const notFoundImageURL = '/undraw/not-found.svg'

const NotFound = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const redirectToBtn = user ? 'Insights' : 'Login'
  const redirectToURL = user ? ROUTES.DASHBOARD : ROUTES.SIGN_IN

  const handleRedirect = () => {
    navigate(redirectToURL)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <figure className='w-full max-w-lg mt-12'>
        <img src={notFoundImageURL} alt='404 not found' className='max-w-' />
        <figcaption className='text-3xl text-center -mt-12'>Page Not Found</figcaption>
      </figure>

      <Button onClick={handleRedirect} className='mt-16 text-lg'>
        Go to {redirectToBtn}
      </Button>
    </div>
  )
}

export default NotFound
