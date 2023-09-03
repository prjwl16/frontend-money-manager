import { ChangeEventHandler, useState } from 'react'
import { Tag } from '@/components/Tag.tsx'
import { Input } from '@/components/ui/input.tsx'

interface PickDefaultAccountsProps {
  setDefaultAccount: (accounts: string) => void
  defaultAccount: string | boolean
  setOtherAccount: (accounts: string | boolean) => void
}

export const PickDefaultAccounts = (props: PickDefaultAccountsProps) => {
  const [openInput, setOpenInput] = useState<boolean>(false)
  const { defaultAccount, setDefaultAccount, setOtherAccount } = props

  const bankAccounts = ['HDFC', 'SBI', 'BOI', 'Axis', 'ICICI', 'Kotak', 'IDBI', 'IDFC', 'Federal Bank', 'Others']

  // addAccount(defaultAccounts)

  const handleSelectAccount = (item: string) => {
    setDefaultAccount(item)
    if (item === 'Others') {
      return setOpenInput(true)
    }
    setOpenInput(false)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setOtherAccount(e.target.value)
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <p> Set the default account</p>
      <div className={'flex flex-wrap gap-1 justify-center'}>
        {bankAccounts
          ? bankAccounts.map((account, index) => (
              <Tag
                key={index}
                handleClick={handleSelectAccount}
                text={account}
                isSelected={defaultAccount === account}
              />
            ))
          : null}
        {openInput ? <Input placeholder={'Account name'} onChange={handleChange} /> : null}
      </div>
    </div>
  )
}
