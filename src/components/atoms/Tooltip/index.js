import React from 'react'
import css from './Tooltip.module.css'

export const Tooltip = ({ children, addClass, id, content }) => {
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
