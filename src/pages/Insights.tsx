import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { TrendingUpIcon } from 'lucide-react'
import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import useUserStore from '@/store/userStore.ts'
import { Button } from '@/components/ui/button.tsx'

const Insights = () => {
  const { userData } = useUserStore()
  console.log('User: ', userData)

  const splitwiseAuth = () => {
    window.open('http://localhost:3000/oauth/splitwise', '_self')
  }

  return (
    <div className={'flex flex-col gap-2'}>
      <Button variant='outline' onClick={splitwiseAuth} className={'w-60'}>
        <img src='/sw.svg' alt='splitwise' className={'w-5 h-5 mr-2'} />
        Sign in with splitwise
      </Button>
      <h1>Insights</h1>
      <div className={'flex flex-1 border-cyan-500 w-full flex-row'}>
        <div className={'cards flex gap-4 flex-row flex-wrap'}>
          <Card className={'min-w-[350px]'}>
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
          <Card className={'min-w-[350px]'}>
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
          <Card className={'min-w-[716px]'}>
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

          <Card className={'min-w-[350px]'}>
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
          <Card className={'min-w-[350px]'}>
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
        <div className={'border flex-1 w-full'}>reminders</div>
      </div>
    </div>
  )
}

export default Insights
