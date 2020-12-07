import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Link.module.css'

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
