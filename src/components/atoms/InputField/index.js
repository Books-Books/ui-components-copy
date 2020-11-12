import _uniqueId from 'lodash/uniqueId'
import React, { useState } from 'react'
import { InputCont, InputStyled, LabelStyle } from './style'
import { ThemeProvider } from 'styled-components'
import { GlobalThemes } from '../../../theme/index'

export const InputField = ({ type, label, ...args }) => {
  const SelectTheme = GlobalThemes.primary
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
    <ThemeProvider theme={SelectTheme}>
      <InputCont
        inputMode={type}
        className={isFocus || value !== '' ? 'is-active' : ''}
        {...args}
      >
        <InputStyled
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          id={id}
        />
        {type !== 'date' && (
          <LabelStyle htmlFor={id} inputMode={type}>
            {label}
          </LabelStyle>
        )}
      </InputCont>
    </ThemeProvider>
  )
}
