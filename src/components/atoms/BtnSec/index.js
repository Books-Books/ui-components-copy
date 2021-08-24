import React, { forwardRef } from 'react'
import css from './BtnSec.module.css'

const BtnSec = forwardRef(function BtnSec(props, ref) {
  const {
    classes,
    className,
    disabled = false,
    fullWidth,
    nameIcon,
    positionIcon,
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    selected,
    selectionFollowsFocus,
    value,
    addClass,
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
      className={`${css.BtnSec} ${addClass}`}
      aria-selected={selected}
      disabled={disabled}
      onClick={handleClick}
      onFocus={handleFocus}
      tabIndex={selected ? 0 : -1}
      {...other}
    >
      <span>{label}</span>
    </button>
  )
})

export { BtnSec }
