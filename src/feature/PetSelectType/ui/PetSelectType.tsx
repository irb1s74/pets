import { memo, useState } from 'react'
import { PetTypeList } from 'entities/Pet'

interface PetSelectTypeProps {
  className?: string
}

export const PetSelectType = memo((props: PetSelectTypeProps) => {
  const { className } = props

  const [filter, setFilter] = useState<string[]>([])
  const handleSetSort = (id: string, type: string) => {
    const isInclude = filter.includes(type)
    setFilter(isInclude ? filter.filter((item) => item !== type) : filter.concat(type))
  }

  return <PetTypeList className={className} active={filter} handleChange={handleSetSort} />
})
