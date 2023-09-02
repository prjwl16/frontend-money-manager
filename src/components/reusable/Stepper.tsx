import { Button } from '@/components/ui/button.tsx'
import React, { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog.tsx'

interface SetupProps {
  openSetup: boolean
  handleCloseSetup: (state: number) => void
  steps: React.ReactNode[]
  defaultStep?: number
  header?: string
}

const Stepper = (props: SetupProps) => {
  const { openSetup, handleCloseSetup } = props
  const [step, setStep] = useState(props.defaultStep || 0)
  const steps = props.steps
  const header = props.header

  const nextStep = () => {
    if (step == steps.length - 1) handleCloseSetup(1)
    setStep((prevState) => prevState + 1)
  }

  const prevStep = () => {
    setStep((prevState) => prevState - 1)
  }

  return (
    <>
      {openSetup ? (
        <Dialog open={openSetup} onOpenChange={() => handleCloseSetup(0)}>
          <DialogContent>
            <h1>{header || 'Welcome...!'}</h1>
            {/* Content */}
            {steps[step]}
            <div className={'flex gap-4 justify-between'}>
              <div>
                <Button onClick={prevStep} variant={'ghost'} className={step > 0 ? 'block' : 'hidden'}>
                  Prev
                </Button>
              </div>
              <div className={'flex gap-4 justify-end'}>
                <Button
                  variant={'ghost'}
                  className={step == steps.length - 1 ? 'hidden' : ''}
                  onClick={() => handleCloseSetup(0)}
                >
                  Skip
                </Button>
                <Button variant={'outline'} onClick={nextStep}>
                  {step == steps.length - 1 ? 'Done' : 'Next'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  )
}

export default Stepper
