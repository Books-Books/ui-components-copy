import _uniqueId from 'lodash/uniqueId'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalThemes } from '../../../theme/index'
import { LabelStyled } from './style'

export const InputAction = ({ theme }) => {
  const SelectTheme = GlobalThemes[theme]
  const id = _uniqueId('ui-')
  return (
    <ThemeProvider theme={SelectTheme}>
      <LabelStyled htmlFor={id}>
        <input id={id} type='file' /> <span>Seleccione un archivo</span>
      </LabelStyled>
    </ThemeProvider>
  )
}
