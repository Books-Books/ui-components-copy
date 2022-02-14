import React from 'react'
import css from './Section.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea las secciones del sitio las cuales serán navegables a través del los botones del componente BtnSec
 * param { label, value }
 * - label: etiqueta que se está usando la sección. Esta se usará para agregarse a la url y permitirse que será navegable con los botones BtnSec y para relacionar los encabezados de sección con el aria-labelledby del contenedor de section.
 * - value: número de la sección. Se usa para relacionarse con el botón BtnSec
 **/

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
      <h2 className='sr-only' id={`simple-tab-${label}`}>
        Sección {label}
      </h2>
      {children}
    </section>
  )
}

export { Section }

