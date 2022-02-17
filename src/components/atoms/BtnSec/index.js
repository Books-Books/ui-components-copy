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
    setValue,
    url,
    ...other
  } = props

  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value)
    }

    if (onClick) {
      onClick(event)
    }
    if (setValue) {
      setValue(value + 1)
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
        href={url}
        role='tab'
        className={`${css.BtnSec} ${addClass}`}
        aria-selected={selected}
        onClick={handleClick}
        onFocus={handleFocus}
        value={value + 1}
        {...other}
      >
        <span class='sr-only'>Sección {label}</span>
      </a>
    </li>
  )
})

export { BtnSec }
