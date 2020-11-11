import React, { useState } from 'react'
import { InputCont, InputStyled, LabelStyle } from './style'
import { ThemeProvider } from 'styled-components'
import { GlobalThemes } from '../../../theme/index'

export const InputField = ({ theme, type, label }) => {
  const SelectTheme = GlobalThemes[theme]
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
      <InputCont className={isFocus || value !== '' ? 'active' : ''}>
        <InputStyled
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <LabelStyle> {label} </LabelStyle>
      </InputCont>
    </ThemeProvider>
  )
}
