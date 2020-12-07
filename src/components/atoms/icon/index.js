import React from 'react'
import css from './Icon.module.css'

export const Icon = ({ nameIcon, addClass, ...args }) => {
  return (
    <i className={`${css.Icon} ${addClass}`} {...args}>
      {nameIcon}
    </i>
  )
}
