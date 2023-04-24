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
    ['select_open']: isOpen,
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
      <div className={classNames('select', mod, [className])}>
        <div onClick={toggling} className='select__header'>
          <label className={classNames('select__name', { ['select__name_top']: value })}>
            {label}
          </label>
          {value && (
            <Text
              text={`${options.find((option) => option.value === value)?.label || value}`}
              className='select__text'
            />
          )}
          <span className='select__arrow'>
            <Arrow />
          </span>
        </div>
        {isOpen && (
          <div className='select__content'>
            <ul className='select__list'>
              {options.map(({ label: optionLabel, value: optionValue }, index) => (
                <li
                  onClick={handleOnChange(optionValue)}
                  key={`${index}_${optionValue}`}
                  className={classNames('select__item', {
                    ['select__item_active']: value === optionValue,
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
