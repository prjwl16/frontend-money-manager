import { useUser } from '@/hooks/useUser'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const RequireAuth = ({ children }: Props) => {
  const { user } = useUser()
  const { pathname } = useLocation()

  return user ? children : <Navigate to='/' replace state={{ path: pathname }} />
}

export default RequireAuth
