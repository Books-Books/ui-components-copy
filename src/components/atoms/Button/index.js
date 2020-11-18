import React from 'react'
import { Icon } from '../icon'

import css from './Button.module.css'

console.log('css', css)

export const Button = ({ styled, label, icon, ...args }) => {
  return (
    <button className={css.ButtonBase} styled={styled} {...args}>
      {icon && <Icon nameIcon={icon} />}
      <span>{label}</span>
    </button>
  )
}
