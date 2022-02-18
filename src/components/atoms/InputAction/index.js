import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import base from '../../utilities/style/Base.module.css'
import css from './InputAction.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón para poder o subir un archivo o seleccionar un color
 * param { type, styled, label, addClass, }
 * - type: El tipo de botón que se creará. Los valores son "file" o "color"
 * - styled: tipo de estilo del botón. Los valores permitidos están en PropTypes
 * - label: etiqueta que describirá el elemento.
 * - addClass: clase adicional que se necesite agregar al botón
 **/

export const InputAction = ({ type, styled, label, addClass, ...args }) => {
  // Genera un id automáticamente
  const id = _uniqueId('ui-')

  // Icono de upload
  const uploadIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className='svg-icon'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z'></path>
    </svg>
  )

  // Ícono de paleta de colores
  const colorIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 20 20'
      aria-hidden='true'
      focusable='false'
      className='svg-icon'
    >
      <path fill='none' d='M0 0H20V20H0z'></path>
      <path d='M10 2c-4.41 0-8 3.59-8 8s3.59 8 8 8c1.1 0 2-.9 2-2 0-.49-.18-.96-.51-1.34a.445.445 0 01-.1-.26c0-.22.18-.4.4-.4h1.42c2.65 0 4.8-2.15 4.8-4.8C18 5.23 14.41 2 10 2zm-4.5 8.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm2.5-3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm2.5 3a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z'></path>
    </svg>
  )

  return (
    <Fragment>
      <label
        className={`${base.ColorBase} ${css.LabelStyled} ${addClass}`}
        htmlFor={id}
        styled={styled}
        {...args}
      >
        <input
          className={css.InputAction}
          type={type}
          id={id}
          // onInput={handleChage}
        />
        {type === 'color' ? colorIcon : uploadIcon}
        {label !== '' ? <span>{label}</span> : <Fragment />}
      </label>
    </Fragment>
  )
}
InputAction.propTypes = {
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
  type: PropTypes.oneOf(['file', 'color']),
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  addClass: PropTypes.string
}

InputAction.defaultProps = {
  styled: 'primary',
  type: 'file',
  addClass: '',
  onClick: undefined
}
