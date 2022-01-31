import PropTypes from 'prop-types'
import React, { createRef, Fragment, useState } from 'react'
import css from './Multimedia.module.css'

function Multimedia({ url, label = 'Reproducir', addClass, isPrimary = true }) {
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
  function handlePlayPause() {
    const $audio = refAudio.current
    validateStateBtn($audio)
  }

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
