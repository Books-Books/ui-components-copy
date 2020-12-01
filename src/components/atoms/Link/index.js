import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Link.module.css'

export const Link = ({ label, href, icon, target }) => {
  return (
    <a className={css.LinkCont} href={href} target={target}>
      {icon && <Icon nameIcon={icon} />}
      {label}
    </a>
  )
}

Link.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  target: PropTypes.string
}

Link.defaultProps = {
  target: '_self'
}
