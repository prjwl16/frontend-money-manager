import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { transactionForm, transactionFormTypeZod } from '@/types/transactionForm.ts'
import TransactionForm from '@/components/forms/TransactionForm.tsx'

export default function Transaction() {
  const [type, setType] = React.useState<'expense' | 'income' | 'subscription' | 'transfer'>('expense')

  const defaultValues: Partial<transactionFormTypeZod> = {
    type: 'INCOME',
    amount: 1010,
    currency: 'INR',
    title: 'Tomatoes',
    account: 'SBI',
    date: new Date(),
  }

  const form = useForm<z.infer<typeof transactionForm>>({
    resolver: zodResolver(transactionForm),
    defaultValues,
  })

  function onSubmit(values: z.infer<typeof transactionForm>) {
    if (type === 'expense') {
      console.log('Expense')
    }

    console.log(values)
  }

  return (
    <div className={'flex'}>
      <Tabs defaultValue='expense' className=''>
        <TabsList>
          <TabsTrigger value='expense'>Expense</TabsTrigger>
          <TabsTrigger value='income'>Income</TabsTrigger>
          <TabsTrigger value='subscription'>Subscription</TabsTrigger>
          <TabsTrigger value='transfer'>Transfer</TabsTrigger>
        </TabsList>
        <TabsContent value='expense' onClick={() => setType('expense')}>
          <TransactionForm form={form} onSubmit={onSubmit} />
        </TabsContent>
        <TabsContent value='income'>
          <TransactionForm form={form} onSubmit={onSubmit} />
        </TabsContent>
        <TabsContent value='subscription'>
          <TransactionForm form={form} onSubmit={onSubmit} />
        </TabsContent>
        <TabsContent value='transfer'>
          <TransactionForm form={form} onSubmit={onSubmit} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
