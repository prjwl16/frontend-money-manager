import { Button } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

interface TagProps {
  text: string
  handleClick: (text: string) => void
  isSelected?: boolean
}

export const Tag = (props: TagProps) => {
  const { text, handleClick, isSelected } = props
  return (
    <Button
      autoFocus={false}
      onClick={() => handleClick(text)}
      variant={'ghost'}
      className={cn('hover:bg-secondary', isSelected ? 'bg-secondary' : '')}
    >
      {text}
    </Button>
  )
}
