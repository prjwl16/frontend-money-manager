import React, { useState } from 'react'
import { PickDefaultAccounts } from '@/components/PickDefaultAccounts.tsx'
import Stepper from '@/components/reusable/Stepper.tsx'
import { markDone } from '@/APIs/user.ts'
import { useToast } from '@/components/ui/use-toast.ts'
import store from 'storejs'

interface SetupProps {
  openSetup: boolean
  setOpenState: (state: boolean) => void
}

const Setup = (props: SetupProps) => {
  const { toast } = useToast()
  const { openSetup, setOpenState } = props
  const [defaultAccount, setDefaultAccount] = useState<string>('HDFC')
  const [otherAccount, setOtherAccount] = useState<string | boolean>(false)

  const handleCloseSetup = (action: number) => {
    const payload = {
      account: { accountName: otherAccount ? otherAccount : defaultAccount },
      group: { name: 'Personal', description: 'Personal transactions' },
    }
    // call API
    markDone(payload)
      .then((res) => {
        toast({
          title: action === 1 ? 'Setup completed' : 'Setup skipped',
          description: 'You can always change your settings later',
        })
        console.log('response from done: ', res)
        store.set('user', res)
      })
      .catch(() => {
        toast({
          title: 'Setup failed',
          description: 'Failed to setup account',
        })
      })
    setOpenState(false)
  }

  // Account
  const steps = [
    <PickDefaultAccounts
      defaultAccount={defaultAccount}
      setDefaultAccount={setDefaultAccount}
      key={1}
      setOtherAccount={setOtherAccount}
    />,
  ]

  return (
    <div>{openSetup ? <Stepper steps={steps} openSetup={openSetup} handleCloseSetup={handleCloseSetup} /> : null}</div>
  )
}

export default Setup
