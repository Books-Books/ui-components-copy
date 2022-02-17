import React, { Fragment } from 'react'
import './AudioBar.module.css'

export const AudioBar = ({ id, audio, formato }) => {
  return (
    <Fragment>
      <div key={id}>
        <audio controls oncontextmenu='return false;' controlslist='nodownload'>
          <source src={audio} type={formato} />
          <track
            src='assets/audios/slide18_1.vtt'
            kind='captions'
            srclang='es'
            label='audio...'
          ></track>
        </audio>
      </div>
    </Fragment>
  )
}
