import PropTypes from 'prop-types'
import React, {Fragment} from 'react'
import { Icon } from '../icon'
import css from './Button.module.css'
import base from '../../utilities/style/Base.module.css'


export const Button = ({ styled, label, icon, ...args }) => {
  return (
    <button className={`${base.ColorBase} ${css.ButtonBase}`} styled={styled} {...args}>
      {icon && <Icon nameIcon={icon} />}
      {label !== "" ? <span>{label}</span>: <Fragment></Fragment>}
    </button>
  )
}

Button.propTypes = {
  styled: PropTypes.oneOf([
    'primary',
    'secondary',
    'primary-outline',
    'secondary-outline',
    'primary-icon',
    'secondary-icon',
    'primary-icon-outline',
    'secondary-icon-outline'
  ]),
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  styled: 'primary',
  onClick: undefined
}
