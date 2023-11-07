import TransactionForm from '@/components/forms/TransactionForm.tsx'
import { transactionForm, transactionFormTypeZod } from '@/types/transactionForm.ts'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const Payments = () => {
  // add transaction form here

  const defaultValues: Partial<transactionFormTypeZod> = {
    type: 'INCOME',
    amount: 1010,
    currency: 'INR',
    particular: 'Tomatoes',
    account: 'SBI',
    date: new Date(),
    category: 'Groceries',
    description: 'Bought tomatoes',
  }

  const form = useForm<z.infer<typeof transactionForm>>({
    resolver: zodResolver(transactionForm),
    defaultValues,
  })

  function onSubmit(values: z.infer<typeof transactionForm>) {
    console.log(values)
  }

  return (
    <div>
      <TransactionForm form={form} onSubmit={onSubmit} />
    </div>
  )
}
export default Payments
