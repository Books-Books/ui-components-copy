/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React, { Fragment, useState } from 'react'
import { Button } from '../Button'

export const RecognitionVoice = ({ setdata, children }) => {
  const [action, setAction] = useState('record')
  const runSpeechRecognition = () => {
    // get output div reference
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var recognition = new SpeechRecognition()

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
      setAction('listening')
    }

    recognition.onspeechend = function () {
      setAction('record')
      recognition.stop()
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function ({ results }) {
      const transcript = results[0][0].transcript
      setdata && setdata(transcript)
    }

    // start recognition
    recognition.start()
  }
  return (
    <Fragment>
      <Button
        type='button'
        onClick={runSpeechRecognition}
        icon={action === 'record' ? 'mic' : 'mic_off'}
        label={action}
      />
      {children && children}
    </Fragment>
  )
}
