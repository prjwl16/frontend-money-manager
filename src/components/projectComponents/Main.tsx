import React from 'react'
import { ClassName } from '@/types/className.ts'
import { Route, Routes } from 'react-router-dom'
import SignIn from '@/pages/SignIn'
import Insights from '@/pages/Insights.tsx'
import Transaction from '@/pages/Transaction.tsx'
import { cn } from '@/lib/utils.ts'
import RequireAuth from '@/components/utils/RequireAuth'
import AuthGuard from '@/components/utils/AuthGuard'
import { ROUTES } from '@/lib/routes'

const Main: React.FC<ClassName> = ({ className }) => {
  return (
    <div className={cn(className, ' mx-auto')}>
      <div className={'flex-1 container mt-2'}>
        <Routes>
          <Route
            path={ROUTES.SIGN_IN}
            element={
              <AuthGuard>
                <SignIn />
              </AuthGuard>
            }
          />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <RequireAuth>
                <Insights />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.ADD_TRANSACTION}
            element={
              <RequireAuth>
                <Transaction />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.PAYMENTS}
            element={
              <RequireAuth>
                <></>
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.ANALYTICS}
            element={
              <RequireAuth>
                <></>
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.WALLETS}
            element={
              <RequireAuth>
                <></>
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.SETTINGS}
            element={
              <RequireAuth>
                <></>
              </RequireAuth>
            }
          />
          <Route path='*' element={<>Not found</>} />
        </Routes>
      </div>
    </div>
  )
}

export default Main
