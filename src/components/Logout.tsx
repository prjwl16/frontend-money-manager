import { useEffect } from 'react'
import store from 'storejs'
import { useNavigate } from 'react-router-dom'
export const Logout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    store.clear()
    console.log('token', store.get('token'))
    return navigate('/')
  })

  return <> </>
}
