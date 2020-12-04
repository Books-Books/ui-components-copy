import PropTypes from 'prop-types'
import React, { createRef, useState } from 'react'
import { Icon } from '../icon/index'
import css from './Video.module.css'

function Video({ url, width }) {
  const [getDurationVideo, setDurationVideo] = useState('00:00') // estado duracion del video
  const [getCurrentTiem, setCurrentTime] = useState('00:00') // estado del tiempo de ver el video
  const [getstateVideoPlay, setStateVideoPlay] = useState({
    state: false,
    icon: 'play_arrow'
  }) // estado del play
  const [getStateScreen, setStateScreen] = useState({
    state: false,
    icon: 'open_in_full'
  }) // stado de la pantalla completa
  const [getValueVolum, setValueVolumn] = useState(0.23)
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
        icon: 'play_arrow'
      })
    } else {
      $video.play()
      setStateVideoPlay({
        state: true,
        icon: 'pause'
      })
    }
  }

  // funcion del evento click de pantalla completa
  function hanldeFullScrenn() {
    const video = refVideo.current
    video.requestFullscreen()
    if (getStateScreen.state) {
      video.webkitRequestFullscreen()
      setStateScreen({
        state: false,
        icon: 'play_arrow'
      })
    } else {
      video.mozRequestFullscreen()
      setStateScreen({
        state: true,
        icon: 'close_fullscreen'
      })
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
    setValueVolumn(value)
    video.volume = getValueVolum
  }

  return (
    <div
      className={css['c-vid']}
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
        <Icon nameIcon={getstateVideoPlay.icon} onClick={handlePlay} />
        <p className={css['c-vid-controls-text']}>
          <span>{getCurrentTiem}</span> / <span>{getDurationVideo}</span>
        </p>
        <div className={css['c-vid-controls-volumn']}>
          <Icon nameIcon='volume_up' />
          <input
            className={css['c-vid-controls-volumn-item']}
            ref={refVolumn}
            type='range'
            min='0'
            max='1'
            step='any'
            value={getValueVolum}
            onChange={handleVolumn}
          />
        </div>
        <Icon nameIcon={getStateScreen.icon} onClick={hanldeFullScrenn} />
      </div>
    </div>
  )
}

export { Video }

Video.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string
}
