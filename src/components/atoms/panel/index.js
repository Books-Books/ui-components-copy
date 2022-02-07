import React from 'react'
import css from './Panel.module.css'

export const TabPanel = (props) => {
  const {
    children,
    value,
    index,
    addClass,
    roleDescription = 'slide',
    ...other
  } = props

  return (
    <div
      className={`${css.Panel} ${addClass}`}
      role='group'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-roledescription={roleDescription}
      aria-labelledby={`simple-tab-${index}`}
      tabIndex='0'
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}
