import React from 'react'
import css from './Toggletip.module.css'

export const Toggletip = ({ children, addClass, id, content }) => {
  return (
    <div className={`${css.TooltipCont} ${addClass}`}>
      {children}
      <div role='tooltip' className={css.TooltipItem} id={id}>
        {content}
      </div>
    </div>
  )
}

// Tooltip.propTypes = {
//   addClass: PropTypes.string
// }

// Tooltip.defaultProps = {
//   addClass: ''
// }
