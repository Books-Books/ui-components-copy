import React from 'react'
import css from './TourHelpLayer.module.css'

export const TourHelpLayer = ({
  width = '200',
  height = '100',
  top = '100',
  left = '4',
  number = '1'
}) => {
  const position = {
    width: `${width}px`,
    height: `${height}px`,
    top: `${top}px`,
    left: `${left}px`
  }
  return (
    <div style={position} className={css['tour-help']}>
      <span className={css['tour-number']}>{number}</span>
    </div>
  )
}
