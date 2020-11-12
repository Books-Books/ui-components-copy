import _uniqueId from 'lodash/uniqueId'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalThemes } from '../../../theme/index'
import { Icon } from '../icon'
import {
  InputActionStyled,
  LabelStyled,
  SpanStyled,
  TextFileName
} from './style'

export const InputAction = ({ type, theme, label, icon, ...args }) => {
  const [Value, SetValue] = useState('')
  const SelectTheme = GlobalThemes[theme]
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
    <ThemeProvider theme={SelectTheme}>
      <LabelStyled htmlFor={id}>
        <InputActionStyled
          type={type}
          id={id}
          onInput={handleChage}
          {...args}
        />
        <Icon nameIcon={icon} />
        <SpanStyled>{label}</SpanStyled>
      </LabelStyled>
      {Value !== '' && (
        <TextFileName bgColor={type === 'color' ? Value : ''}>
          {Value}
        </TextFileName>
      )}
    </ThemeProvider>
  )
}
