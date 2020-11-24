import React from 'react'
import css from './Panel.module.css'

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      className={css.Panel}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}
