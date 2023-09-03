import React, { useEffect } from 'react'
import NavBar from '@/components/projectComponents/NavBar.tsx'
import Main from '@/components/projectComponents/Main.tsx'
import { fetchUser } from '@/APIs/user.ts'
import useUserStore from '@/store/userStore.ts'
import { Toaster } from '@/components/ui/toaster.tsx'

function App() {
  const { setUserData, userData } = useUserStore()

  const setUser = async () => {
    console.log('Calling User')
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
    setUserData(user)
  }

  useEffect(() => {
    console.log('Inside useEffect')
    if (userData?.id) return
    setUser()
  })

  return (
    <div className={'min-h-screen flex gap-4 border-red-500 max-w-screen-xl mx-auto box-border'}>
      <NavBar className={'flex h-screen overflow-auto sticky p-2'} />
      <Main className={'flex-1 h-screen overflow-auto p-2'} />
      <Toaster />
    </div>
  )
}

export default App
