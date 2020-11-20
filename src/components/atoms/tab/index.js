import * as React from 'react'
import { Icon } from '../icon'
import css from './Tab.module.css'

export const Tab = React.forwardRef(function Tab(props, ref) {
  const {
    classes,
    className,
    disabled = false,
    fullWidth,
    icon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    ...other
  } = props

  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value)
    }

    if (onClick) {
      onClick(event)
    }
  }

  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value)
    }

    if (onFocus) {
      onFocus(event)
    }
  }

  return (
    <button
      ref={ref}
      role='tab'
      className={css.TabsBtn}
      aria-selected={selected}
      disabled={disabled}
      onClick={handleClick}
      onFocus={handleFocus}
      tabIndex={selected ? 0 : -1}
      {...other}
    >
      <span className={css.TabsBtnContent}>
        <Icon aria-hidden='true' nameIcon='lock' />{' '}
        <span className={css.TabsBtnContentLabel}>{label}</span>{' '}
      </span>
      <span className={css.TabsBtnIndicator}>
        <span className={css.TabsBtnIndicatorContent} />
      </span>
    </button>
  )
})
