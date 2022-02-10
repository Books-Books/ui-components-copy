import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Link.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón.
 * param { label, href, icon, addClass, target }
 * - label: etiqueta del link
 * - href: dirección a la que enviará el link
 * - icon: determina el nombre del ícono de Google Icons que será usado.
 * - addClass: clase adicional que deba usarse en este link.
 * - target: cómo abrirá el link. Los valores permitidos son _self (abrirá en la misma pestaña) o _target (abrirá en otra pestaña)
 **/

export const Link = ({ label, href, icon, addClass, target }) => {
  return (
    <a className={`${css.LinkCont} ${addClass}`} href={href} target={target}>
      {icon && <Icon nameIcon={icon} />}
      {label}
    </a>
  )
}

Link.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  target: PropTypes.string,
  addClass: PropTypes.string
}

Link.defaultProps = {
  target: '_self',
  addClass: ''
}
