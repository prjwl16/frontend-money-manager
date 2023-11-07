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
import NotFound from '@/components/not-found'
import TransactionTable from '@/pages/Transactions.tsx'
import Payments from '@/pages/Payments.tsx'

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
                <TransactionTable />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.PAYMENTS}
            element={
              <RequireAuth>
                <Payments />
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main
