/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React, {
  Children,
  Fragment,
  isValidElement,
  useEffect,
  useState
} from 'react'
import { Button } from '../Button'

export const RecognitionVoice = ({
  setdata,
  validate,
  children: childrenProp,
  disabled,
  styledButton = 'secondary-icon'
}) => {
  const [action, setAction] = useState('record')
  const [diagnostic, setDiagnostic] = useState('')
  let GRAMMAR = `#JSGF V1.0; grammar ; public <command> = ${validate || ''} ;`

  const runSpeechRecognition = () => {
    // get output div reference
    // new speech recognition object
    const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    const speechRecognitionList = new SpeechGrammarList()
    const recognition = new SpeechRecognition()
    speechRecognitionList.addFromString(GRAMMAR, 1)
    recognition.grammars = speechRecognitionList
    recognition.continuous = false
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
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
    recognition.onnomatch = function (event) {
      setDiagnostic("I didn't recognise that color.")
    }

    recognition.onerror = function (event) {
      setDiagnostic('Error occurred in recognition: ' + event.error)
    }
    // start recognition
    recognition.start()
  }

  useEffect(() => {
    GRAMMAR = `#JSGF V1.0; grammar ; public <command> = ${validate || ''} ;`
  }, [validate])

  const children = Children.map(childrenProp, (child) => {
    if (!isValidElement(child)) {
      return null
    }

    return React.cloneElement(child, {
      children: diagnostic
    })
  })

  return (
    <Fragment>
      <Button
        type='button'
        onClick={runSpeechRecognition}
        icon={action === 'record' ? 'mic' : 'mic_off'}
        label=''
        /* disabled={disabled} */
        styled={styledButton}
      />
      {children && children}
    </Fragment>
  )
}
