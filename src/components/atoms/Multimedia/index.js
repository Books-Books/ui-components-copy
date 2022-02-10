import PropTypes from 'prop-types'
import React, { createRef, Fragment, useState } from 'react'
import css from './Multimedia.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón.
 * param { url, label, addClass, isPrimary }
 * - url: ruta del audio que será reproducido
 * - label: etiqueta del botón. Por defecto es "Reproducir" y siempre será un aria-label
 * - addClass: clase adicional que se le agregue al botón.
 * - isPrimary: determina si el estilo del botón va a usar el estilo de color primaro (si es true) o secundario (si es false)
 **/
function Multimedia({ url, label = 'Reproducir', addClass, isPrimary = true }) {
  // Ícono de reproducir

  const playButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='svg-icon'
      focusable='false'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M8 5v14l11-7z'></path>
    </svg>
  )

  // Ícono de pausar
  const pauseButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='48px'
      viewBox='0 0 24 24'
      width='48px'
      fill='#000000'
      aria-hidden='true'
      className='svg-icon'
      focusable='false'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
    </svg>
  )
  const [getStateBtnAudio, setStateBtnAudio] = useState(false)
  const [getIcon, setIcon] = useState(playButton)
  const refAudio = createRef()

  // Determina si el estado del botón es reproduciendo el audio o pausándolo
  function validateStateBtn(element) {
    if (getStateBtnAudio) {
      setStateBtnAudio(false)
      element.pause()
      setIcon(playButton)
      label = 'Reproducir'
    } else {
      setStateBtnAudio(true)
      element.play()
      setIcon(pauseButton)
      label = 'Pausar'
    }
  }

  // Pausa el audio
  function handlePlayPause() {
    const $audio = refAudio.current
    validateStateBtn($audio)
  }

  // Detiene el audio cuando termina
  function handleFinish(e) {
    setStateBtnAudio(false)
    setIcon(playButton)
  }

  return (
    <Fragment>
      <div className={`${addClass}`}>
        <audio src={url} ref={refAudio} onEnded={handleFinish} />
        <button
          id='btnAudio'
          onClick={handlePlayPause}
          className={`${css['c-aud-btn']} ${
            isPrimary ? '' : css['c-aud-secundary']
          }`}
          aria-label={getStateBtnAudio ? 'Pausar' : 'Reproducir'}
        >
          <div
            className={css['c-aud-btn-content']}
            data-label={label ? 'string' : ''}
          >
            {getIcon}
          </div>
        </button>
      </div>
    </Fragment>
  )
}

export { Multimedia }

Multimedia.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  addClass: PropTypes.string
}

Multimedia.defaultProps = {
  addClass: ''
}
