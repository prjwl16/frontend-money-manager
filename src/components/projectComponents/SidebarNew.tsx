import React from 'react'
import { ClassName } from '@/types/className.ts'
import { cn } from '@/lib/utils.ts'
import { NavLink } from 'react-router-dom'
import { IconWrapper } from '@/data/navigation.tsx'
import { Search } from '@/components/projectComponents/Search.tsx'
import { LogOut } from 'lucide-react'
import { navRoutes } from '@/data/navigationNew.tsx'

const SidebarNew: React.FC<ClassName> = ({ className }) => {
  const [searchState, setOpenState] = React.useState(false)

  const handleClick = () => {
    setOpenState(!searchState)
  }

  return (
    <div className={cn(className, 'hidden sm:flex items-center justify-evenly py-12 flex-col border-r')}>
      <div className={'flex flex-col gap-12'}>
        {navRoutes.map((route, key) => {
          return (
            <NavLink
              key={key}
              to={route.path}
              className={({ isActive }) => (isActive ? 'flex gap-4 text-red-700 dark:text-purple-300' : 'flex gap-4')}
            >
              <IconWrapper icon={route.icon} size={24} />
              <p>{route.header}</p>
            </NavLink>
          )
        })}
        <div className={'flex gap-4'}>
          <LogOut size={24} className={'cursor-pointer'} />
          <p>Logout</p>
        </div>
      </div>
      <Search state={searchState} setState={setOpenState} />
    </div>
  )
}

export default SidebarNew
