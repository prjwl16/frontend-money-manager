import { addAccount, getAccounts } from '@/APIs/account.ts'
import { useEffect } from 'react'

interface PickDefaultAccountsProps {
  accounts: accountTypes[]
  setAccounts: (state: accountTypes[]) => void
  setSelectedAccount: (state: accountTypes) => void
}

export const PickDefaultAccounts = (props: PickDefaultAccountsProps) => {
  const { accounts, setAccounts } = props

  const fetchAccounts = async () => {
    if (!accounts?.length) {
      const data: null | accountTypes[] = await getAccounts()
      console.log('fetching accounts', data)
      if (data?.length) setAccounts(data)
    }
  }

  const defaultAccounts: accountTypes[] = [
    {
      name: 'Cash',
      type: 'CASH',
      balance: 0,
    },
    {
      name: 'Bank',
      type: 'BANK',
      balance: 0,
    },
  ]

  addAccount(defaultAccounts)

  useEffect(() => {
    if (!accounts?.length) fetchAccounts()
  })

  return (
    <div>
      <p> Set the default account you spend the most from</p>
      <div className={'flex flex-wrap gap-1 justify-center'}>
        {accounts ? accounts.map((account) => <div key={account.id}>{account.name}</div>) : null}
      </div>
    </div>
  )
}
