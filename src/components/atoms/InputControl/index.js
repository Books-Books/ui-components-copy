import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Icon } from '../icon'
import _uniqueId from 'lodash/uniqueId'
import {
  InputCont,
  CheckCont,
  CheckLabel,
  CheckBg,
  InputStyled,
  CheckTrack
} from './style'
import { GlobalThemes } from '../../../theme/index'

export const InputControl = ({ theme, type, ...args }) => {
  const [check, setCheck] = useState(false)
  const SelectTheme = GlobalThemes[theme]
  console.log('InputControl -> SelectTheme', SelectTheme)
  const id = _uniqueId('ui-')
  return (
    <ThemeProvider theme={SelectTheme}>
      <InputCont htmlFor={id} className='c-inputControl' inputMode={type}>
        <CheckCont className='c-inputControl_checkCont' inputMode={type}>
          <InputStyled
            className='c-inputControl_input'
            inputMode={type}
            defaultChecked={check}
            type={type === 'toggle' ? 'checkbox' : type}
            id={id}
            {...args}
          />
          {type === 'toggle' && <CheckTrack />}
          <CheckBg
            className='c-inputControl_bgInput'
            inputMode={type}
            onClick={() => setCheck(!check)}
          >
            {type !== 'toggle' && (
              <Icon className='c-inputControl_icon' nameIcon='check' />
            )}
          </CheckBg>
        </CheckCont>
        <CheckLabel className='c-inputControl_label'>Item 1</CheckLabel>
      </InputCont>
    </ThemeProvider>
  )
}
