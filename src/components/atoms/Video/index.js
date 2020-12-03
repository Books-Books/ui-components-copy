import PropTypes from 'prop-types'
import React, { createRef, useEffect, useState } from 'react'
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
  const refVideo = createRef()

  useEffect(() => {
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
  })

  // funcion de click del play
  function handlePlay() {
    const $video = refVideo.current
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

  return (
    <div className={css['c-vid']} style={{ width: width }}>
      <video ref={refVideo}>
        <source src={url} />
      </video>
      <div className={css['c-vid-controls']}>
        <Icon nameIcon={getstateVideoPlay.icon} onClick={handlePlay} />
        <span>{getCurrentTiem}</span>
        <span>{getDurationVideo}</span>
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
