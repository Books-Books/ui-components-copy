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

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
const speechRecognitionList = new SpeechGrammarList()
const recognition = new SpeechRecognition()

export const RecognitionVoice = ({
  setdata,
  validate,
  children: childrenProp,
  disabled = '',
  styledButton = 'secondary-icon',
  onRecord
}) => {
  const micOnIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a.998.998 0 00-.98-.85c-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08a6.993 6.993 0 005.91-5.78c.1-.6-.39-1.14-1-1.14z'></path>
    </svg>
  )
  const micOffIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65L15 10.6zm3.08.4c-.41 0-.77.3-.83.71-.05.32-.12.64-.22.93l1.27 1.27c.3-.6.52-1.25.63-1.94a.857.857 0 00-.85-.97zM3.71 3.56a.996.996 0 000 1.41L9 10.27v.43c0 1.19.6 2.32 1.63 2.91.75.43 1.41.44 2.02.31l1.66 1.66c-.71.33-1.5.52-2.31.52-2.54 0-4.88-1.77-5.25-4.39a.839.839 0 00-.83-.71c-.52 0-.92.46-.85.97.46 2.96 2.96 5.3 5.93 5.75V20c0 .55.45 1 1 1s1-.45 1-1v-2.28a7.13 7.13 0 002.55-.9l3.49 3.49a.996.996 0 101.41-1.41L5.12 3.56a.996.996 0 00-1.41 0z'></path>
    </svg>
  )
  const [action, setAction] = useState('record')
  const [diagnostic, setDiagnostic] = useState('')
  let GRAMMAR = `#JSGF V1.0; grammar ; public <command> = ${validate || ''} ;`
  let transcript

  recognition.onresult = function ({ results }) {
    transcript = results
  }
  recognition.onnomatch = function (event) {
    setDiagnostic("I didn't recognise that color.")
  }

  recognition.onerror = function (event) {
    setDiagnostic('Error occurred in recognition: ' + event.error)
  }

  const runSpeechRecognition = () => {
    speechRecognitionList.addFromString(GRAMMAR, 1)
    recognition.grammars = speechRecognitionList
    recognition.continuous = true
    recognition.lang = 'en-US'
    recognition.interimResults = true
    recognition.maxAlternatives = 1

    if (action === 'record') {
      recognition.start()
      onRecord && onRecord(true)
      setAction('listening')
    } else {
      onRecord && onRecord(false)
      stopRecording()
    }
  }

  const stopRecording = () => {
    if (transcript) {
      let strText = ''
      transcript = Array.from(transcript)

      transcript.forEach((element) => {
        strText += element[0].transcript
      })
      console.log('DESDE UI', strText)
      setdata && setdata(strText)
    }
    recognition.stop()
    setAction('record')
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
        disabled={disabled}
        styled={styledButton}
        aria-label='Reproducir'
      />
      {children && children}
    </Fragment>
  )
}
