import React, { useEffect, useState } from 'react'
import { PickCategories } from '@/components/PickCategories.tsx'
import { PickDefaultAccounts } from '@/components/PickDefaultAccounts.tsx'
import Stepper from '@/components/reusable/Stepper.tsx'
import useUserStore from '@/store/userStore.ts'
import { markDone } from '@/APIs/user.ts'
import { useToast } from '@/components/ui/use-toast.ts'
import { ToastAction } from '@/components/ui/toast.tsx'

const Setup = () => {
  const [openSetup, setOpeState] = useState<boolean>(false)
  const { userData } = useUserStore()
  const { toast } = useToast()

  const handleCloseSetup = (action: number) => {
    setOpeState(false)
    // call API
    markDone()
    toast({
      title: action === 1 ? 'Setup completed' : 'Setup skipped',
      description: 'You can always change your settings later',
      action: <ToastAction altText={'close'} />,
    })
  }

  // BU
  // Category
  const [categories, setCategories] = useState<categoryTypes[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set())

  const handleSelectCategory = (item: categoryTypes) => {
    const newSet = new Set(selectedCategories)
    newSet.add(item.id)
    setSelectedCategories((prevState) => {
      const newSet = new Set(prevState)
      const isDeleted = newSet.delete(item.id)
      if (isDeleted) return newSet
      return newSet.add(item.id)
    })
  }

  // Account
  const [accounts, setAccounts] = useState<accountTypes[]>([])
  const [selectedAccount, setSelectedAccount] = useState<accountTypes>()

  const steps = [
    <PickCategories
      setCategories={setCategories}
      selectedCategories={selectedCategories}
      categories={categories}
      handleClick={handleSelectCategory}
      key={0}
    />,
    <PickDefaultAccounts
      setSelectedAccount={setSelectedAccount}
      setAccounts={setAccounts}
      accounts={accounts}
      key={1}
    />,
  ]

  useEffect(() => {
    if (!userData?.doneSetup) {
      setOpeState(true)
    }
  })

  return (
    <div>{openSetup ? <Stepper steps={steps} openSetup={openSetup} handleCloseSetup={handleCloseSetup} /> : null}</div>
  )
}

export default Setup
