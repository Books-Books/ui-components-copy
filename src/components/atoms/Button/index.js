import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../icon'
import css from './Button.module.css'

export const Button = ({ styled, label, icon, ...args }) => {
  return (
    <button className={css.ButtonBase} styled={styled} {...args}>
      {icon && <Icon nameIcon={icon} />}
      <span>{label}</span>
    </button>
  )
}

Button.propTypes = {
  styled: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  label: 'Button',
  styled: 'primary',
  onClick: undefined
}
