import React from 'react'
import { ClassName } from '@/types/className.ts'
import { Route, Routes } from 'react-router-dom'
import Sign from '@/pages/Sign.tsx'
import Insights from '@/pages/Insights.tsx'
import Transaction from '@/pages/Transaction.tsx'
import { cn } from '@/lib/utils.ts'

const Main: React.FC<ClassName> = ({ className }) => {
  return (
    <div className={cn(className, ' mx-auto')}>
      <div className={'flex-1 container mt-2'}>
        <Routes>
          <Route path={'/'} element={<Sign />} />
          <Route path={'/insights'} element={<Insights />} />
          <Route path={'/add/transaction'} element={<Transaction />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main
