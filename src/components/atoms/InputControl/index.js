import _uniqueId from 'lodash/uniqueId'
import React, { useState } from 'react'
import { Icon } from '../icon'
import css from './InputControl.module.css'

export const InputControl = ({ type, label, ...args }) => {
  const [check, setCheck] = useState(false)
  const id = _uniqueId('ui-')
  return (
    <label htmlFor={id} className={css.InputCont} inputMode={type}>
      <div className={css.CheckCont} inputMode={type}>
        <input
          className={css.InputStyled}
          inputMode={type}
          defaultChecked={check}
          type={type === 'toggle' ? 'checkbox' : type}
          id={id}
          {...args}
        />
        {type === 'toggle' && <div className={css.CheckTrack} />}
        <div
          className={css.CheckBg}
          inputMode={type}
          onClick={() => setCheck(!check)}
        >
          {type !== 'toggle' && <Icon nameIcon='check' />}
        </div>
      </div>
      <label className={css.CheckLabel}>{label}</label>
    </label>
  )
}
