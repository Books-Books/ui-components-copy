import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import css from './InputField.module.css'

export const InputField = ({ type, label, ...args }) => {
  const id = _uniqueId('ui-')
  const [isFocus, setIsFocus] = useState(false)
  const [value, setValue] = useState('')

  function handleChange({ target }) {
    setValue(target.value)
  }
  function handleFocus() {
    setIsFocus(!isFocus)
  }
  function handleBlur() {
    setIsFocus(!isFocus)
  }

  return (
    <label
      inputMode={type}
      className={css.InputCont}
      data-status={isFocus || value !== '' ? 'active' : false}
      {...args}
    >
      <input
        className={css.InputStyled}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        id={id}
      />
      {type !== 'date' && (
        <label className={css.LabelStyle} htmlFor={id} inputMode={type}>
          {label}
        </label>
      )}
    </label>
  )
}

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'date']),
  label: PropTypes.string.isRequired
}

InputField.defaultProps = {
  label: 'Label',
  type: 'text'
}
