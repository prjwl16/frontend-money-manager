import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { TrendingUpIcon } from 'lucide-react'
import 'react-circular-progressbar/dist/styles.css'
import Setup from '@/pages/Setup.tsx'
import { useEffect, useState } from 'react'
import { useUser } from '@/hooks/useUser'
import { Separator } from '@/components/ui/separator.tsx'

const Insights = () => {
  const splitwiseAuthUrl = import.meta.env.VITE_SPLITWISE_AUTH_URL
  const [openSetup, setOpenSetup] = useState<boolean>(false)
  const { user } = useUser()

  const splitwiseAuth = () => {
    window.open(splitwiseAuthUrl, '_self')
  }

  useEffect(() => {
    if (!user?.doneSetup) {
      setOpenSetup(true)
    }
  }, [])

  return (
    <div className={'flex flex-col gap-2'}>
      <Setup setOpenSetup={setOpenSetup} openSetup={openSetup} />
      {/* <Button variant='outline' onClick={splitwiseAuth} className={'w-max items-center flex justify-center'}> */}
      {/*   <Icons.splitwise width={'20px'} height={'20px'} /> */}
      {/*   <p className={'pl-2'}>Connect splitwise</p> */}
      {/* </Button> */}

      <h1 className={'font-thin text-2xl gradient-text w-max'}>Insights</h1>
      <div className={'flex flex-1 w-full flex-row'}>
        <div className={'cards flex gap-4 flex-row flex-wrap w-9/12'}>
          <Card className={''}>
            <div className={'flex justify-between items-center p-4'}>
              <div className={'flex flex-col gap-6'}>
                <CardDescription>Income</CardDescription>
                <CardTitle className={'font-thin'}> $4,980 </CardTitle>
                <span className={'flex gap-2 justify-start'}>
                  <TrendingUpIcon />
                  <p className={'text-purple-300'}>Per month in 23&rsquo;</p>
                </span>
              </div>
            </div>
          </Card>
          <Card className={''}>
            <div className={'flex justify-between items-center p-4'}>
              <div className={'flex flex-col gap-6'}>
                <CardDescription>Income</CardDescription>
                <CardTitle className={'font-thin'}> $4,980 </CardTitle>
                <span className={'flex gap-2 justify-start'}>
                  <TrendingUpIcon />
                  <p className={'text-purple-300'}>Per month in 23&rsquo;</p>
                </span>
              </div>
            </div>
          </Card>
          <Card className={''}>
            <div className={'flex justify-between items-center p-4'}>
              <div className={'flex flex-col gap-6'}>
                <CardDescription>Income</CardDescription>
                <CardTitle className={'font-thin'}> $4,980 </CardTitle>
                <span className={'flex gap-2 justify-start'}>
                  <TrendingUpIcon />
                  <p className={'text-purple-300'}>Per month in 23&rsquo;</p>
                </span>
              </div>
            </div>
          </Card>
        </div>
        <Card className={'border flex-1 w-full flex justify-center items-center'}>Reminders</Card>
      </div>
    </div>
  )
}

export default Insights
