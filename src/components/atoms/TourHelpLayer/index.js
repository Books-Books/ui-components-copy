import React from 'react'
import css from './TourHelpLayer.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea la ventana que rodea el elemento que se está explicando en el tour (funcionalidades pendientes)
 * - width: ancho del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - height: altura del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - top: posición inicial vertical del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - left: posición inicial horizontal del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - number: número del elemento (cambia dinámicamente dentro del componente WindowTour)
 **/

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
