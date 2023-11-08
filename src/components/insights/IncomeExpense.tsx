import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Tooltip as ToolTeep,
  Line,
  AreaChart,
  Area,
} from 'recharts'
import { useEffect, useState } from 'react'
import axios from '@/APIs/axios.ts'
import { TRANSACTION } from '@/APIs/constants.ts'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx'

const datas = [
  {
    name: 'June',
    uv: 12222,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const IncomeExpense = () => {
  const [data, setData] = useState()

  const getData = async () => {
    const response = await axios.get(`${TRANSACTION.INCOME_EXPENSE}`)
    console.log('Datatata', response)
    response.data.data.forEach((row: any) => {
      if (!row.EXPENSE) row.EXPENSE = 0
      if (!row.INCOME) row.INCOME = 0
    })
    setData(response.data.data)
  }

  useEffect(() => {
    if (!data) getData()
  })

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload.INCOME
      return (
        <TooltipProvider>
          <Tooltip>
            <p>{data}</p>
          </Tooltip>
        </TooltipProvider>
      )
    }

    return null
  }

  return (
    <>
      <LineChart width={600} height={100} data={data}>
        <Line type='monotone' dataKey='INCOME' stroke='#8884d8' strokeWidth={2} />
        <XAxis dataKey={'name'} />
        <ToolTeep content={<CustomTooltip />} />
      </LineChart>
      {/* <LineChart width={700} height={300} data={data}> */}
      {/*   <Tooltip /> */}
      {/*   /!* <Legend /> *!/ */}
      {/*   <Line type='monotone' dataKey='EXPENSE' stroke='#8884d8' /> */}
      {/*   <Line type='monotone' dataKey='INCOME' stroke='#82ca9d' /> */}
      {/* </LineChart> */}
      {/* <AreaChart width={700} height={250} data={data}> */}
      {/*   <defs> */}
      {/*     <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'> */}
      {/*       <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} /> */}
      {/*       <stop offset='95%' stopColor='#8884d8' stopOpacity={0} /> */}
      {/*     </linearGradient> */}
      {/*     <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'> */}
      {/*       <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} /> */}
      {/*       <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} /> */}
      {/*     </linearGradient> */}
      {/*   </defs> */}
      {/*   <XAxis dataKey='name' /> */}

      {/*   <Tooltip /> */}
      {/*   <Area type='monotone' dataKey='EXPENSE' stroke='#8884d8' fillOpacity={1} fill='url(#colorUv)' /> */}
      {/*   <Area type='monotone' dataKey='INCOME' stroke='#82ca9d' fillOpacity={1} fill='url(#colorPv)' /> */}
      {/* </AreaChart> */}
    </>
  )
}
