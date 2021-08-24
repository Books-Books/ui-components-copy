import React from 'react'

const Section = ({ children, value, index, addClass, ...other }) => {
  return (
    <section
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <article>{children}</article>}
    </section>
  )
}

export { Section }
