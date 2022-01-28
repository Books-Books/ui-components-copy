import React from 'react'
import css from './Section.module.css'

const Section = ({ children, value, index, label, addClass, ...other }) => {
  return (
    <section
      className={`${css.section} ${addClass}`}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${label}`}
      {...other}
    >
      <h2 class='sr-only' id={`simple-tab-${label}`}>
        Sección {label}
      </h2>
      {children}
    </section>
  )
}

export { Section }
