import React from 'react'

import css from './Icon.module.css'

export const Icon = ({ nameIcon, ...args }) => {
  return (
    <i className={css.Icon} {...args}>
      {nameIcon}
    </i>
  )
}
