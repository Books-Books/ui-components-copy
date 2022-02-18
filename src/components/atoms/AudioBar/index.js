import React, { Fragment } from 'react'
import './AudioBar.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Invoca un reproductor de audio
 * param { id, audio, formato }
 * - id: para la key del componente.
 * - audio: ruta del audio a mostrar.
 * - formato: formato del audio.
 **/
export const AudioBar = ({ id, audio, formato }) => {
  return (
    <Fragment>
      <div key={id}>
        <audio controls oncontextmenu='return false;' controlslist='nodownload'>
          <source src={audio} type={formato} />
          <track src='' kind='captions' srclang='es' label='audio...'></track>
        </audio>
      </div>
    </Fragment>
  )
}
