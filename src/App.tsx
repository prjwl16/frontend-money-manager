import NavBar from '@/components/projectComponents/NavBar.tsx'
import Main from '@/components/projectComponents/Main.tsx'
import { Toaster } from '@/components/ui/toaster.tsx'

function App() {
  return (
    <div className={'min-h-screen flex gap-4 border-red-500 max-w-screen-xl mx-auto box-border'}>
      <NavBar className={'flex h-screen overflow-auto sticky p-2'} />
      <Main className={'flex-1 h-screen overflow-auto p-2'} />
      <Toaster />
    </div>
  )
}

export default App
