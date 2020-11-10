import React from 'react'
import { ButtonStyled } from './style'
import { ThemeProvider } from 'styled-components'
import { GlobalThemes } from '../../../theme/index'
import { Icon } from '../icon'

export const Button = ({ theme, label, icon, ...args }) => {
  const SelectTheme = GlobalThemes[theme]
  return (
    <ThemeProvider theme={SelectTheme}>
      <ButtonStyled reverse={icon?.reverse} {...args}>
        {icon && <Icon {...icon} />}
        <span>{label}</span>
      </ButtonStyled>
    </ThemeProvider>
  )
}
