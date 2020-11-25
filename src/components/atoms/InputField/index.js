import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useState } from 'react'
import { Icon } from '../icon'
import css from './InputField.module.css'

export const InputField = ({ type, label, dataIcon, styledInput, ...args }) => {
  const id = _uniqueId('ui-')
  const [isFocus, setIsFocus] = useState(false)
  const [value, setValue] = useState('')
  const [getStateInput, setStateInput] = useState('')

  useEffect(() => {
    function addClass(element, nameClass) {
      element.classList.add(css[nameClass])
    }
    function validateInput(content, input, label) {
      if (getStateInput) {
        if (getStateInput === 'Error') {
          addClass(content, 'deactive-border')
          addClass(input, 'input-error')
          addClass(label, 'label-error')
        }
        if (getStateInput === 'Succes') {
          addClass(content, 'deactive-border')
          addClass(input, 'input-succes')
          addClass(label, 'label-succes')
        }
      } else {
        console.log('default')
      }
    }

    function initInput() {
      setStateInput(styledInput)
      const $content = document.querySelector(`#contentLabel${id}`)
      const $input = document.querySelector(`#${id}`)
      const $label = document.querySelector(`#label-${id}`)
      validateInput($content, $input, $label)
    }
    initInput()
  })
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
      id={`contentLabel${id}`}
      state-input={styledInput}
      {...args}
    >
      {dataIcon.state ? (
        <Icon nameIcon={dataIcon.nameIcon} state-input={styledInput} />
      ) : (
        <Fragment />
      )}
      <input
        className={css.InputStyled}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        id={id}
      />
      {type !== 'date' && (
        <label
          className={css.LabelStyle}
          htmlFor={id}
          inputMode={type}
          id={`label-${id}`}
          state-input={styledInput}
        >
          {label}
        </label>
      )}
    </label>
  )
}

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'date', 'number']),
  label: PropTypes.string.isRequired,
  dataIcon: PropTypes.object,
  styledInput: PropTypes.string
}

InputField.defaultProps = {
  label: 'Label',
  type: 'text',
  dataIcon: {
    state: false
  }
}
