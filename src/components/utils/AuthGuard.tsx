import { useUser } from '@/hooks/useUser'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const AuthGuard = ({ children }: Props) => {
  const { user } = useUser()

  return user ? <Navigate to={'/insights'} replace /> : children
}

export default AuthGuard
