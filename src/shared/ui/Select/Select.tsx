import { SelectHTMLAttributes, useState } from 'react'
import classNames from 'classnames'
import Arrow from 'shared/assets/icons/arrow.svg'
import styles from './Select.module.scss'
import ClickAwayListener from 'react-click-away-listener'
import { Text } from 'shared/ui/Text'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

interface IOptions {
  value: string
  label: string
}

interface SelectProps extends HTMLSelectProps {
  onChange?: (value: string) => void
  options?: IOptions[] | undefined
  label?: string
  className?: string
}

export const Select = (props: SelectProps) => {
  const { label, className, options, defaultValue, onChange } = props
  const [value, setValue] = useState(defaultValue || '')
  const [isOpen, setIsOpen] = useState(false)
  const mod = {
    [styles.open]: isOpen,
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
      <div className={classNames(styles.Select, mod, [className])}>
        <div onClick={toggling} className={styles.Select__header}>
          <label className={classNames(styles.name, { [styles.nameTop]: value })}>{label}</label>
          {value && <Text text={`${value}`} className={styles.text} />}
          <span className={styles.arrow}>
            <Arrow />
          </span>
        </div>
        {isOpen && (
          <div className={styles.Select__content}>
            <ul className={styles.list}>
              {options.map(({ label: optionLabel, value: optionValue }, index) => (
                <li
                  onClick={handleOnChange(optionValue)}
                  key={`${index}_${optionValue}`}
                  className={classNames(styles.item, {
                    [styles.itemActive]: value === optionValue,
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
}
