import React, { useEffect, useRef } from 'react'
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
  const dragButton = useRef()

  useEffect(() => {
    dragButton.current.onmousedown = function (event) {
      const currentParent = dragButton.current.parentElement
      const parent = event.target.parentElement

      let shiftX = event.clientX - currentParent.getBoundingClientRect().left
      let shiftY = event.clientY - currentParent.getBoundingClientRect().top

      currentParent.style.position = 'absolute'
      currentParent.style.zIndex = 5
      document.body.append(currentParent)

      moveAt(parent.pageX, parent.pageY)

      // Mueve el reproductor a las coordenadas (pageX, pageY) tomando la posición inicial en cuenta
      function moveAt(pageX, pageY) {
        currentParent.style.left = pageX - shiftX + 'px'
        currentParent.style.top = pageY - shiftY + 'px'
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
      }

      // Mueve el reproductor
      document.addEventListener('mousemove', onMouseMove)

      // Deja de mover el reproductor al soltar el mouse
      currentParent.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        dragButton.current.onmouseup = null
      }
    }

    dragButton.current.parentElement.ondragstart = function () {
      return false
    }
  }, [dragButton.current])

  return (
    <span className={`${css['draggable-video-container']}`} draggable>
      <button className={`${css['draggable-video-button']}`} ref={dragButton}>
        <Icon nameIcon='open_with' />
        <span className='sr-only'>Mover en la pantalla</span>
      </button>
      <Video url={url} width={width} />
    </span>
  )
}
