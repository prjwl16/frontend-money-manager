import React, { ReactNode } from 'react'
import { DashboardIcon, TrackNextIcon } from '@radix-ui/react-icons'
import { AirplayIcon, BookIcon, SettingsIcon, UserPlus2Icon } from 'lucide-react'

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
  },
  {
    header: 'Transactions',
    path: '/add/transaction',
    icon: <BookIcon width={24} height={24} />,
  },
  {
    header: 'Payments',
    path: '/payments',
    icon: <TrackNextIcon width={24} height={24} />,
  },

  {
    header: 'Analytics',
    path: '/analytics',
    icon: <AirplayIcon width={24} height={24} />,
  },
  {
    header: 'Wallet',
    path: '/wallets',
    icon: <UserPlus2Icon width={24} height={24} />,
  },
  {
    header: 'Settings',
    path: '/settings',
    icon: <SettingsIcon width={24} height={24} />,
  },
]
