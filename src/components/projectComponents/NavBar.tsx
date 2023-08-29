import React from 'react'
import { ModeToggle } from '@/components/projectComponents/toggle-theme.tsx'
import { useTheme } from '@/components/projectComponents/theme-provider.tsx'
import { NavLink } from 'react-router-dom'
import SidebarNew from '@/components/projectComponents/SidebarNew.tsx'
import { ClassName } from '@/types/className.ts'
import { cn } from '@/lib/utils.ts'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

const NavBar: React.FC<ClassName> = ({ className }) => {
  const { theme } = useTheme()

  return (
    <div className={cn(className)}>
      <div className={'flex flex-col justify-center items-center sticky'}>
        <button className={'w-full flex h-14 justify-center items-center'}>
          <NavLink to={'/'}>
            <img src={theme === 'dark' ? 'logo3D.png' : 'logo3.png'} className={'w-24'} />
          </NavLink>
        </button>
        <SidebarNew className={'flex w-[200px] h-full'} />
        <div className={'flex justify-between items-center '}>
          <ModeToggle />
          <Button variant={'ghost'} size={'icon'}>
            <LogOut size={24} className={'cursor-pointer hover:border'} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
