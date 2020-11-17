import React from 'react'

import css from './Icon.module.css'

export const Icon = ({ nameIcon }) => {
  return <i className={css.Icon}>{nameIcon}</i>
}
