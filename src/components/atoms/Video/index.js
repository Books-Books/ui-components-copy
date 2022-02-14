import PropTypes from 'prop-types'
import React, { createRef, useState } from 'react'
import css from './Video.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un reproductor de video
 * param { url, width, addClass }
 * - url: ruta del video que será reproducido.
 * - width: ancho máximo del video.
 * - addClass: clase adicional que se le agregue al reproductor.
 **/
function Video({ url, width, addClass }) {
  // Icons

  const playIcon = (
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

  const pauseIcon = (
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

  const fullscreenIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      focusable='false'
      aria-hidden='true'
    >
      <path fill='none' d='M0 0H24V24H0z'></path>
      <path d='M21 11L21 3 13 3 16.29 6.29 6.29 16.29 3 13 3 21 11 21 7.71 17.71 17.71 7.71z'></path>
    </svg>
  )

  const closeFullScreenIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      focusable='false'
      aria-hidden='true'
    >
      <path fill='none' d='M0 0H24V24H0z'></path>
      <path d='M22 3.41L16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z'></path>
    </svg>
  )

  const [getDurationVideo, setDurationVideo] = useState('00:00') // estado duracion del video
  const [getCurrentTiem, setCurrentTime] = useState('00:00') // estado del tiempo de ver el video
  const [getstateVideoPlay, setStateVideoPlay] = useState({
    state: false,
    icon: playIcon,
    label: 'Reproducir video'
  }) // estado del play
  const [getStateScreen, setStateScreen] = useState({
    state: false,
    icon: fullscreenIcon,
    label: 'Ver en pantalla completa'
  }) // stado de la pantalla completa
  const [getValueVolum, setValueVolumn] = useState(25)
  const refCont = createRef()
  const refVideo = createRef()
  const refProgress = createRef()
  const refProgressBar = createRef()
  const refVolumn = createRef()

  // funcion de click del play
  function handlePlay() {
    const $video = refVideo.current
    // $video.
    if (getstateVideoPlay.state) {
      $video.pause()
      setStateVideoPlay({
        state: false,
        icon: playIcon,
        label: 'Reproducir video'
      })
    } else {
      $video.play()
      setStateVideoPlay({
        state: true,
        icon: pauseIcon,
        label: 'Pausar video'
      })
    }
  }

  // funcion del evento click de pantalla completa
  function hanldeFullScrenn() {
    const isInFullScreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    // const video = refVideo.current
    const docElm = refCont.current
    if (!isInFullScreen) {
      setStateScreen({
        state: true,
        icon: closeFullScreenIcon,
        label: 'Salir de pantalla completa'
      })
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
    } else {
      setStateScreen({
        state: false,
        icon: fullscreenIcon,
        label: 'Ver en pantalla completa'
      })
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  // progreso de la barra
  function handleBarProgress() {
    const video = refVideo.current
    const progressElem = refProgressBar.current
    const porcent = (video.currentTime / video.duration) * 100
    progressElem.style.flexBasis = `${porcent}%`
  }

  // tiempo de video y de progreso
  function handleTimeProcess() {
    const dataVideo = refVideo.current
    initialValores(dataVideo)
    // funcion inicial
    function initialValores(element) {
      const durationVideo = hourToString(element.duration)
      const travelVideo = hourToString(element.currentTime)
      setCurrentTime(travelVideo)
      setDurationVideo(durationVideo)
    }
    // funcion saca segundos, minutos, horas
    function hourToString(timeSeconds) {
      const secundsNumber = parseInt(timeSeconds, 10)
      const hours = Math.floor(secundsNumber / 3600)
      const minutes = Math.floor((secundsNumber - hours * 3600) / 60)
      const seconds = secundsNumber - hours * 3600 - minutes * 60
      // valores validados si son mas de dos digitos
      const valisateHours = validateIsNan(validateDigits(hours))
      // se valida si el value es NaN
      const validateMinutes = validateIsNan(validateDigits(minutes))
      const validateSeconds = validateIsNan(validateDigits(seconds))
      return `${valisateHours}:${validateMinutes}:${validateSeconds}`
    }
    // funcion para validar la cantidad de digitos y agregarles el 0
    function validateDigits(value) {
      if (value < 10) {
        return (value = '0' + value)
      } else {
        return value
      }
    }
    // funcion valida si el valor ingresado es Na-n
    function validateIsNan(elem) {
      return isNaN(elem) ? '00' : elem
    }
  }
  // funcion para adelantar o atrasar video
  function handleProcessControl(e) {
    const progress = refProgress.current
    const video = refVideo.current
    const positionClick = e.nativeEvent.offsetX // se obtiene posicion del click
    const scrubTime = (positionClick / progress.offsetWidth) * video.duration // operacion
    video.currentTime = scrubTime
  }
  // funcion para el volumen
  function handleVolumn(e) {
    const video = refVideo.current
    const value = e.target.value
    const volume = value / 100
    setValueVolumn(value)
    video.volume = volume
  }

  return (
    <div
      className={`${css['c-vid']} ${addClass}`}
      ref={refCont}
      style={{ maxWidth: width, minWidth: '320px' }}
    >
      <video
        ref={refVideo}
        onTimeUpdate={() => {
          handleBarProgress()
          handleTimeProcess()
        }}
      >
        <source src={url} />
      </video>
      <div className={css['progress-content']}>
        <div
          ref={refProgress}
          className={css.progress}
          onClick={handleProcessControl}
        >
          <div
            ref={refProgressBar}
            className={css['progress-bar']}
            onChange={handleBarProgress}
          />
        </div>
      </div>
      <div className={css['c-vid-controls']}>
        <button aria-label={getstateVideoPlay.label} onClick={handlePlay}>
          {getstateVideoPlay.icon}
        </button>
        {/* <Icon nameIcon={getstateVideoPlay.icon} onClick={handlePlay} /> */}
        <p className={css['c-vid-controls-text']}>
          <span>{getCurrentTiem}</span> / <span>{getDurationVideo}</span>
        </p>
        <div className={css['c-vid-controls-volumn']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 24 24'
            aria-hidden='true'
            focusable='false'
          >
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'></path>
          </svg>
          <label for='volumeControl'>
            <span className='sr-only'>Controlar volumen</span>
            <input
              className={css['c-vid-controls-volumn-item']}
              ref={refVolumn}
              id='volumeControl'
              type='range'
              min='0'
              max='100'
              step='5'
              value={getValueVolum}
              onChange={handleVolumn}
              aria-valuetext={`${getValueVolum}%`}
            />
          </label>
        </div>
        <button aria-label={getStateScreen.label} onClick={hanldeFullScrenn}>
          {getStateScreen.icon}
        </button>
        {/* <Icon nameIcon={getStateScreen.icon} onClick={hanldeFullScrenn} /> */}
      </div>
    </div>
  )
}

export { Video }

Video.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  addClass: PropTypes.string
}

Video.defaultProps = {
  addClass: ''
}
