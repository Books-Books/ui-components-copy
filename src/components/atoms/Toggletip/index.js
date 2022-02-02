import React, { useState } from 'react'
import { Button } from '../Button'
import css from './Toggletip.module.css'

export const Toggletip = ({ content }) => {
  const [toggletipContent, SetToggletipContent] = useState('')

  const changeToggletipContent = () => {
    toggletipContent == ''
      ? SetToggletipContent(
          <div className={css['toggletip-content']}>{content}</div>
        )
      : SetToggletipContent('')

    if (toggletipContent) {
    }
  }

  const emptyToggletipContent = () => {
    SetToggletipContent('')
  }

  const emptyToggletipContentOnEsc = (e) => {
    if ((e.keyCode || e.which) === 27) SetToggletipContent('')
  }

  return (
    <div className={css['toggletip-container']}>
      <Button
        hasAriaLabel='false'
        styled='primary-icon'
        label=''
        onClick={changeToggletipContent}
        onBlur={emptyToggletipContent}
        onKeyDown={emptyToggletipContentOnEsc}
      >
        <span className={css['toggletip-icon']} aria-hidden='true'>
          i
        </span>
        <span class='sr-only'>Más información</span>
      </Button>
      <div role='status'>{toggletipContent}</div>
    </div>
  )
}

// Tooltip.propTypes = {
//   addClass: PropTypes.string
// }

// Tooltip.defaultProps = {
//   addClass: ''
// }
