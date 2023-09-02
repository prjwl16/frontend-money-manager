import { useEffect, useState } from 'react'
import { getCategories } from '@/APIs/category.ts'
import { Badge } from '@/components/ui/badge.tsx'
import { cn } from '@/lib/utils.ts'
import { Skeleton } from '@/components/ui/skeleton.tsx'

interface PickCategoriesProps {
  selectedCategories: Set<string>
  categories?: categoryTypes[]
  setCategories: (state: categoryTypes[]) => void
  handleClick: (item: categoryTypes) => void
}

export const PickCategories = (props: PickCategoriesProps) => {
  const { selectedCategories, setCategories, categories, handleClick } = props

  const fetchCategories = async () => {
    if (!categories?.length) {
      const data: null | categoryTypes[] = await getCategories()
      if (data) setCategories(data)
      console.log('fetching categories')
    }
  }

  useEffect(() => {
    if (!categories?.length) fetchCategories()
  })

  return (
    <div className={'flex flex-col gap-2'}>
      <p> Pick the categories you spend the most on...</p>
      <div className={'flex flex-wrap gap-1 justify-center'}>
        {categories ? (
          categories.map((category) => (
            <Badge
              className={cn(
                'cursor-pointer select-none',
                selectedCategories.has(category.id) ? 'bg-primary/50 hover:bg-primary/50' : ''
              )}
              onClick={() => handleClick(category)}
              key={category.id}
            >
              {category.title}
            </Badge>
          ))
        ) : (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className={'w-20 h-8 rounded-xl'} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
