import { DragEvent, memo, ReactNode } from 'react'

interface DragFileProps {
  id?: string
  className?: string
  handleChange?: (id: string, values: any) => void
  children?: ReactNode
}

export const DragFile = memo((props: DragFileProps) => {
  const { id, children, handleChange, className } = props

  const dragStart = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const dragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const dragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const dropFile = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const { dataTransfer } = event
    const { files } = dataTransfer

    if (files && files.length) {
      handleChange(id, files)
    }
  }
  return (
    <div
      className={className}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragLeave={dragLeave}
      onDrop={dropFile}
    >
      {children}
    </div>
  )
})
