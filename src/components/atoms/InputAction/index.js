import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import { Icon } from '../icon'
import css from './InputAction.module.css'

export const InputAction = ({ type, styled, label, icon, ...args }) => {
  const [Value, SetValue] = useState('')
  const id = _uniqueId('ui-')

  function handleChage({ target }) {
    switch (type) {
      case 'file':
        SetValue(target.files[0].name)

        break
      case 'color':
        SetValue(target.value)

        break

      default:
        break
    }
  }

  return (
    <Fragment>
      <label className={css.LabelStyled} htmlFor={id} styled={styled}>
        <input
          className={css.InputAction}
          type={type}
          id={id}
          onInput={handleChage}
          {...args}
        />
        <Icon nameIcon={icon} />
        <span>{label}</span>
      </label>
      {Value !== '' && (
        <p style={type === 'color' ? `background-color:${Value}` : ''}>
          {Value}
        </p>
      )}
    </Fragment>
  )
}
InputAction.propTypes = {
  styled: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['file', 'color']),
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

InputAction.defaultProps = {
  label: 'select',
  styled: 'primary',
  type: 'file',
  onClick: undefined
}
