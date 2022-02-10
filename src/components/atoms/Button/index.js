import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import base from '../../utilities/style/Base.module.css'
import { Icon } from '../icon'
import css from './Button.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón.
 * param { styled, label, hasAriaLabel, icon, disabled }
 * - styled: definición del estilo del botón. La lista está en Button.propTypes
 * - label: etiqueta del botón
 * - hasAriaLabel: determina si la etiqueta será usada como un aria-label (si es true) o será mostrada como texto de forma normal (si es false)
 * - icon: determina el nombre del ícono de Google Icons que será usado.
 * - disabled: determina si el botón estará o no deshabilitado.
 **/

export const Button = ({
  styled,
  label,
  hasAriaLabel,
  icon,
  addClass,
  disabled,
  children,
  ...args
}) => {
  return (
    <button
      className={`${base.ColorBase} ${css.ButtonBase} ${addClass}`}
      styled={styled}
      disabled={disabled}
      type='button'
      aria-label={hasAriaLabel ? `${label}` : ''}
      {...args}
    >
      {children}
      {icon && <Icon nameIcon={icon} />}
      {!hasAriaLabel ? <span>{label}</span> : <Fragment />}
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
  onClick: PropTypes.func,
  addClass: PropTypes.string
}

Button.defaultProps = {
  styled: 'primary',
  addClass: '',
  onClick: undefined,
  hasAriaLabel: true
}
