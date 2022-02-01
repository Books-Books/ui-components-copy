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
    <li role='presentation'>
      <a
        href={`#section-${label}`}
        role='tab'
        className={`${css.BtnSec} ${addClass}`}
        aria-selected={selected}
        onClick={handleClick}
        onFocus={handleFocus}
        {...other}
      >
        <span class='sr-only'>Sección {label}</span>
        <span aria-hidden='true'>{label}</span>
      </a>
    </li>
  )
})

export { BtnSec }
