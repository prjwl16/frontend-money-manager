import React, { useEffect } from 'react'
import NavBar from '@/components/projectComponents/NavBar.tsx'
import Main from '@/components/projectComponents/Main.tsx'
import { fetchUser } from '@/APIs/user.ts'
import { Toaster } from '@/components/ui/toaster.tsx'
import store from 'storejs'

function App() {
  const setUser = async () => {
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
    return user
  }

  useEffect(() => {
    setUser().then((res) => {
      if (res) store.set('user', res)
    })
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
