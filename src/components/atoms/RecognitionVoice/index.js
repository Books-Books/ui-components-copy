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
  disabled="",
  styledButton = 'secondary-icon',
  onRecord
}) => {
  const [action, setAction] = useState('record')
  const [diagnostic, setDiagnostic] = useState('')
  let GRAMMAR = `#JSGF V1.0; grammar ; public <command> = ${validate || ''} ;`
  let transcript;

  recognition.onresult = function ({ results }) {
    transcript = results;
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
      recognition.start();
      onRecord && onRecord(true)
      setAction('listening')
    } else {
      onRecord && onRecord(false)
      stopRecording();
    }

  }

  const stopRecording = () => {

    if (transcript) {
      let strText = '';
      transcript = Array.from(transcript);

      transcript.forEach((element) => {
        strText += element[0].transcript;

      });
      console.log("DESDE UI", strText);
      setdata && setdata(strText)
    }
    recognition.stop();
    setAction('record')
  };

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
      />
      {children && children}
    </Fragment>
  )
}
