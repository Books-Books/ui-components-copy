import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Link.module.css'

export const Link = ({ label, href, icon }) => {
  return (
    <a className={css.LinkCont} href={href}>
      {icon && <Icon nameIcon={icon} />}
      {label}
    </a>
  )
}

Link.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string
}
