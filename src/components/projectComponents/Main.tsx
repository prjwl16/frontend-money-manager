import React from 'react'
import { ClassName } from '@/types/className.ts'
import { Route, Routes } from 'react-router-dom'
import SignIn from '@/pages/SignIn'
import Insights from '@/pages/Insights.tsx'
import Transaction from '@/pages/Transaction.tsx'
import { cn } from '@/lib/utils.ts'
import RequireAuth from '@/components/utils/RequireAuth'
import AuthGuard from '@/components/utils/AuthGuard'

const Main: React.FC<ClassName> = ({ className }) => {
  return (
    <div className={cn(className, ' mx-auto')}>
      <div className={'flex-1 container mt-2'}>
        <Routes>
          <Route
            path={'/'}
            element={
              <AuthGuard>
                <SignIn />
              </AuthGuard>
            }
          />
          <Route
            path={'/insights'}
            element={
              <RequireAuth>
                <Insights />
              </RequireAuth>
            }
          />
          <Route
            path={'/add/transaction'}
            element={
              <RequireAuth>
                <Transaction />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default Main
