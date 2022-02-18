import React from 'react'
import { Icon } from '../icon/index'
import css from './TourModal.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea el modal que describe el elemento que se necesita mostrar en el tour (funcionalidades pendientes)
 * - top: posición inicial vertical del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - left: posición inicial horizontal del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - description: descripción del elemento (cambia dinámicamente dentro del componente WindowTour)
 * - modalNumber: número del modal en el que se está (cambia dinámicamente dentro del componente WindowTour)
 * - totalModals: total de modales a abrir
 * - nextTour: función que se ejecuta para pasar al siguiente modal (cambia dinámicamente dentro del componente WindowTour)
 * - backTour: función que se ejecuta para regresar al modal anterior (cambia dinámicamente dentro del componente WindowTour)
 * - endTour: función que cierra la ventana de tour (cambia dinámicamente dentro del componente WindowTour)
 **/

export const TourModal = ({
  top = '100',
  left = '300',
  description = 'Este es el botón de menú',
  modalNumber = 4,
  totalModals = 7,
  nextTour,
  backTour,
  endTour
}) => {
  const size = {
    top: `${top}px`,
    left: `${left}px`
  }

  return (
    <div className={css['tour-modal']} role='dialog' style={size}>
      <div className='sr-only'>
        Parte {modalNumber} de {totalModals}
      </div>
      <div aria-hidden='true' className={css['tour-progress']}>
        <div
          className={css['tour-progress-bar']}
          style={{ transform: `scaleX(${modalNumber / totalModals})` }}
        ></div>
      </div>
      <p className={css['tour-description']}>{description}</p>
      <div className={css['tour-button-container']}>
        <button type='button' onClick={endTour}>
          <Icon nameIcon='close' />
          <span class='sr-only'>Salir</span>
        </button>
        <button
          type='button'
          disabled={modalNumber == 1 ? true : false}
          onClick={backTour}
        >
          <Icon nameIcon='arrow_left' />
          <span class='sr-only'>Anterior</span>
        </button>
        <button
          type='button'
          disabled={modalNumber == totalModals ? true : false}
          onClick={nextTour}
        >
          <Icon nameIcon='arrow_right' />
          <span class='sr-only'>Siguiente</span>
        </button>
      </div>
    </div>
  )
}
