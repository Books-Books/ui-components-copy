import React, { createRef, Fragment, useState } from 'react'
import { Icon } from '../icon/index'
import css from './Audio.module.css'

function Audio({ url }) {
  const [getStateBtnAudio, setStateBtnAudio] = useState(false)
  const [getIcon, setIcon] = useState('play_arrow')
  const refAudio = createRef()
  function validateStateBtn(element) {
    if (getStateBtnAudio) {
      setStateBtnAudio(false)
      element.pause()
      setIcon('play_arrow')
    } else {
      setStateBtnAudio(true)
      element.play()
      setIcon('pause')
    }
  }
  function handlePlayPause() {
    const $audio = refAudio.current
    validateStateBtn($audio)
  }
  return (
    <Fragment>
      <div className={css['c-aud']}>
        <audio src={url} ref={refAudio} />
        <button
          id='btnAudio'
          onClick={handlePlayPause}
          className={css['c-aud-btn']}
        >
          <div className={css['c-aud-btn-content']}>
            <Icon nameIcon={getIcon} />
          </div>
        </button>
      </div>
    </Fragment>
  )
}

export { Audio }

