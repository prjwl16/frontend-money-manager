import React, { ReactNode } from 'react'
import { ActivityLogIcon, DashboardIcon, TrackNextIcon } from '@radix-ui/react-icons'
import { AirplayIcon, AlignCenterIcon, BookIcon, SettingsIcon, UserPlus2Icon } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

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
    path: ROUTES.DASHBOARD,
    icon: <DashboardIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Insights',
        path: ROUTES.DASHBOARD,
        icon: <DashboardIcon width={24} height={24} />,
      },
      {
        name: 'Add Transaction',
        path: ROUTES.ADD_TRANSACTION,
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
        path: ROUTES.ADD_CATEGORY,
        icon: <AirplayIcon width={24} height={24} />,
      },
      {
        name: 'Add Account',
        path: ROUTES.ADD_ACCOUNT,
        icon: <AirplayIcon width={24} height={24} />,
      },
      {
        name: 'Add Payee',
        path: ROUTES.ADD_PAYEE,
        icon: <UserPlus2Icon width={24} height={24} />,
      },
      {
        name: 'Add Budget',
        path: ROUTES.ADD_BUDGET,
        icon: <AlignCenterIcon width={24} height={24} />,
      },
    ],
  },

  {
    header: 'Analytics',
    path: ROUTES.ADD_ACCOUNT,
    icon: <AirplayIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: ROUTES.SHOW_TRANSACTIONS,
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Wallet',
    path: ROUTES.ADD_ACCOUNT,
    icon: <UserPlus2Icon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: ROUTES.SHOW_TRANSACTIONS,
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Transactions',
    path: ROUTES.ADD_TRANSACTION,
    icon: <BookIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: ROUTES.SHOW_TRANSACTIONS,
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
  {
    header: 'Settings',
    path: ROUTES.SETTINGS,
    icon: <SettingsIcon width={24} height={24} />,
    subRoutes: [
      {
        name: 'Show All Transactions',
        path: ROUTES.SHOW_TRANSACTIONS,
        icon: <DashboardIcon width={24} height={24} />,
      },
    ],
  },
]
