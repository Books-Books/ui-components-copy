import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Icon } from '../../atoms/icon/index';
import { Video } from '../../atoms/Video/index';
import css from './DraggableVideo.module.css';

/**
 * Fecha: 8 de febrero de 2022
 * Usuario: bb-frontend-7
 * Descripción: Crea un contenedor de video que puede ser arrastrado en pantalla. Su uso es casi exclusivamente para los videos de accesibilidad.
 * param { url, width }
 * - url: url del video
 * - width: ancho máximo en píxeles del video
 **/

export const DraggableVideo = ({ url, width }) => {

  const [position, setPosition] = useState({activeDrags: 0})
  
  const dragHandlers = {
    onStart: () => {
      setPosition({activeDrags: ++position.activeDrags});
    }, 
    onStop: () => {
      setPosition({activeDrags: --position.activeDrags});
    }
  };
  

  return (
    <Draggable handle="strong" {...dragHandlers}>
      <div className={`${css['draggable-video-container']} box no-cursor`}>
        <strong role="presentation" className={`cursor`}>
          <button className={`${css['draggable-video-button']}`} >
            <Icon nameIcon='open_with' />
            <span className='sr-only'>Mover en la pantalla</span>
          </button>
        </strong>
        <Video url={url} width={width} />
      </div>
    </Draggable>
  )
}
