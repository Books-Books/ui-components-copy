import React from 'react'
import css from './TourOverlay.module.css'

export const TourOverlay = (endTour, endTourOnEsc) => {
  return (
    <div
      className={css['tour-overlay']}
      onClick={endTour}
      onKeyDown={endTourOnEsc}
    ></div>
  )
}
