import { memo, SelectHTMLAttributes, useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import Arrow from 'shared/assets/icons/arrow.svg'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './Select.scss'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

interface IOptions {
  value: string
  label: string
}

interface SelectProps extends HTMLSelectProps {
  onChange?: (value: string) => void
  options: IOptions[] | undefined
  label?: string
  className?: string
}

export const Select = memo((props: SelectProps) => {
  const { label, className, options, defaultValue, onChange } = props
  const [value, setValue] = useState(defaultValue || '')
  const [isOpen, setIsOpen] = useState(false)
  const mod = {
    ['Select-open']: isOpen,
  }
  const toggling = () => setIsOpen((prevState) => !prevState)

  const handleOnChange = (value: string) => () => {
    setValue(value)
    setIsOpen(false)
    onChange && onChange(value)
  }
  const handleClickAway = () => setIsOpen(false)

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classNames('Select', mod, [className])}>
        <div onClick={toggling} className='Select__header'>
          <label className={classNames('Select__name', { ['Select__name-top']: value })}>
            {label}
          </label>
          {value && (
            <Text
              text={`${options.find((option) => option.value === value)?.label || value}`}
              className='Select__text'
            />
          )}
          <span className='Select__arrow'>
            <Arrow />
          </span>
        </div>
        {isOpen && (
          <div className='Select__content'>
            <ul className='Select__list'>
              {options.map(({ label: optionLabel, value: optionValue }, index) => (
                <li
                  onClick={handleOnChange(optionValue)}
                  key={`${index}_${optionValue}`}
                  className={classNames('Select__item', {
                    ['Select__item-active']: value === optionValue,
                  })}
                >
                  {optionLabel}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  )
})
