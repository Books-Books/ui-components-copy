import React, { useState } from 'react'
import { Icon } from '../../atoms/icon/index'
import { Video } from '../../atoms/Video/index'
import css from './DraggableVideo.module.css'

/**
 * Fecha: 8 de febrero de 2022
 * Usuario: bb-frontend-7
 * Descripción: Crea un contenedor de video que puede ser arrastrado en pantalla. Su uso es casi exclusivamente para los videos de accesibilidad.
 * param { url, width }
 * - url: url del video
 * - width: ancho máximo en píxeles del video
 **/
export const DraggableVideo = ({ url, width }) => {
  const [dragged, setDragged] = useState(false)

  // Cambia la posición de static a absolute
  function startClassDrag(event) {
    setDragged(true)
  }

  function draggingElement(event) {
    let getStyle = event.target.parentElement

    // Selecciona alto, ancho y posición del mouse en X y en Y
    let elementWidth = getStyle.offsetWidth
    let elementHeight = getStyle.offsetHeight
    let elementTop = event.target.offsetTop
    let elementLeft = event.target.offsetLeft

    // Calcula la posición de la ventana
    getStyle.style.setProperty('--top', `${elementHeight - elementTop}px`)
    getStyle.style.setProperty('--left', `${elementWidth - elementLeft}px`)
    startClassDrag(event)
  }

  return (
    <div
      className={`${css['draggable-video-container']} ${
        dragged ? css['dragged'] : ''
      }`}
      draggable
    >
      <button
        className={css['draggable-video-button']}
        onMouseDown={draggingElement}
      >
        <Icon nameIcon='open_with' />
        <span className='sr-only'>Mover en la pantalla</span>
      </button>
      <Video url={url} width={width} />
    </div>
  )
}
