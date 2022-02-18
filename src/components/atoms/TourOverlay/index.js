import React from 'react'
import css from './TourOverlay.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea la gradiente que cubre toda la pantalla al momento de abrir la sección de Tour. Se cierra al hacerse clic o al presionar la tecla Esc (funcionalidades pendientes)
 * - endTour: función que cierra el tour al hacer clic (agregada en TourWindow)
 * - endTourOnEsc: función que cierra el tour al presionar la tecla Esc (agregada en TourWindow)
 **/

export const TourOverlay = (endTour, endTourOnEsc) => {
  return (
    <div
      className={css['tour-overlay']}
      onClick={endTour}
      onKeyDown={endTourOnEsc}
    ></div>
  )
}
