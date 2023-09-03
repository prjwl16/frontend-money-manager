import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { TrendingUpIcon } from 'lucide-react'
import 'react-circular-progressbar/dist/styles.css'
import { Button } from '@/components/ui/button.tsx'
import { Icons } from '@/data/Icons.tsx'
import Setup from '@/pages/Setup.tsx'
import { useEffect, useState } from 'react'
import { fetchUser } from '@/APIs/user.ts'
import store from 'storejs'

const Insights = () => {
  const splitwiseAuthUrl = import.meta.env.VITE_SPLITWISE_AUTH_URL
  const user = store.get('user')
  const [openSetup, setOpeState] = useState<boolean>(false)

  const splitwiseAuth = () => {
    window.open(splitwiseAuthUrl, '_self')
  }

  useEffect(() => {
    if (!user) {
      fetchUser().then((res) => {
        if (res) {
          store.set('user', user)
          if (!res.doneSetup) setOpeState(true)
        }
      })
    } else {
      if (!user.doneSetup) setOpeState(true)
    }
  }, [])

  return (
    <div className={'flex flex-col gap-2'}>
      <Setup setOpenState={setOpeState} openSetup={openSetup} />
      <Button variant='outline' onClick={splitwiseAuth} className={'w-max items-center flex justify-center'}>
        <Icons.splitwise width={'20px'} height={'20px'} />
        <p className={'pl-2'}>Connect splitwise</p>
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
