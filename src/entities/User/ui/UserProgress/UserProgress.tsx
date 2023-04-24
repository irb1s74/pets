import { memo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { Text } from 'shared/ui/Text'
import Close from 'shared/assets/icons/close.svg'
import Ready from 'shared/assets/icons/ready.svg'
import classNames from 'classnames'
import './UserProgress.scss'

interface UserProgressProps {
  className?: string
}

export const UserProgress = memo((props: UserProgressProps) => {
  const { className } = props

  const data = [
    { name: 'Обед', value: 25, color: '#66CB9F', check: true },
    { name: 'Перекус 1/2', value: 25, color: '#FFC542', check: true },
    { name: 'Прогулка в парке', value: 15, color: '#F16063', check: false },
    { name: 'Игры', value: 35, color: '#EDF2F7', check: true },
  ]

  return (
    <div className={classNames('user-progress', {}, [className])}>
      <ResponsiveContainer className='user-progress__chart' height={234}>
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={80} dataKey='value'>
            {data.map((entry, index) => (
              <Cell r={20} strokeWidth={0} key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='user-progress__tasks'>
        <Text weight='bold' size={18} text='Ежедневный прогресс' />
        {data.map((entry, index) => (
          <div className='user-progress__task' key={index}>
            <div className='user-progress__icon' style={{ backgroundColor: entry.color }}>
              {entry.check ? <Ready /> : <Close />}
            </div>
            <Text size={18} text={entry.name} />
          </div>
        ))}
      </div>
    </div>
  )
})
