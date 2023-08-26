import React from 'react'
import NavBar from '@/components/projectComponents/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import Transaction from '@/pages/Transaction.tsx'
import Dashboard from '@/pages/Insights.tsx'
import SidebarNew from '@/components/projectComponents/SidebarNew.tsx'
import Sign from '@/pages/Sign.tsx'

function App() {
  return (
    <div className={'min-h-screen flex flex-col gap-2'}>
      <NavBar />
      <div className={'flex flex-1 container max-w-screen-xl'}>
        <SidebarNew className={'flex w-[200px] '} />
        <div className={'flex-1 overflow-scroll container mt-2'}>
          <Routes>
            <Route path={'/'} element={<Sign />} />
            <Route path={'/insights'} element={<Dashboard />} />
            <Route path={'/add/transaction'} element={<Transaction />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
