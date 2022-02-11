import PropTypes from 'prop-types'
import React from 'react'
import css from './Icon.module.css'

export const Icon = ({ nameIcon, addClass, ...args }) => {
  return (
    <span aria-hidden='true' className={`${css.Icon} ${addClass}`} {...args}>
      {nameIcon}
    </span>
  )
}

Icon.propTypes = {
  addClass: PropTypes.string
}

Icon.defaultProps = {
  addClass: ''
}
