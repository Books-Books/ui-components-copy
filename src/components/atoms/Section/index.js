import React from 'react'
import css from './Section.module.css'

const Section = ({ children, value, index, label, addClass, ...other }) => {
  return (
    <section
      className={`${css.section} ${addClass}`}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sectionID={`#section-${label}`}
      {...other}
    >
      {children}
    </section>
  )
}

export { Section }
