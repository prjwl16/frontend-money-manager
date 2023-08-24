import React, { ReactNode } from 'react'
import { ActivityLogIcon, DashboardIcon, TextNoneIcon, TrackNextIcon } from '@radix-ui/react-icons'
import {
  AirplayIcon,
  AlarmCheckIcon,
  AlignCenterIcon,
  BookIcon,
  SettingsIcon,
  StickyNoteIcon,
  UserPlus2Icon,
} from 'lucide-react'

export const IconWrapper: React.FC<{ icon: React.ReactNode; size: number }> = ({ icon, size }) => (
  <div className='icon-wrapper font-thin' style={{ fontSize: size }}>
    {icon}
  </div>
)

export interface SubRoute {
  name: string
  path: string
  icon: ReactNode // Use ReactNode type for JSX elements
}

export interface NavRouteTypes {
  header: string
  subRoutes: SubRoute[]
}

export const navRoutes = [
  {
    header: 'Insights',
    path: '/insights',
    icon: <DashboardIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Insights',
        path: '/insights',
        icon: <DashboardIcon width={24} height={24} />,
      },
      {
        name: 'Add Transaction',
        path: '/add/transaction',
        icon: <ActivityLogIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Payments',
    path: '/payments',
    icon: <TrackNextIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Add Category',
        path: '/add/category',
        icon: <AirplayIcon width={24} height={24} />,
      },
      {
        name: 'Add Account',
        path: '/add/account',
        icon: <AirplayIcon width={24} height={24} />,
      },
      {
        name: 'Add Payee',
        path: '/add/payee',
        icon: <UserPlus2Icon width={24} height={24} />,
      },
      {
        name: 'Add Budget',
        path: '/add/budget',
        icon: <AlignCenterIcon width={24} height={24} />,
      },
    ],
  },

  {
    header: 'Analytics',
    path: '/add/account',
    icon: <AirplayIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: '/show/all/transactions',
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Wallet',
    path: '/add/account',
    icon: <UserPlus2Icon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: '/show/all/transactions',
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Transactions',
    path: '/add/transaction',
    icon: <BookIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: '/show/all/transactions',
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Settings',
    path: '/add/account',
    icon: <SettingsIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: '/show/all/transactions',
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
]
