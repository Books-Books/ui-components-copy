/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React, {
  Fragment, useState
} from 'react';
import { Button } from '../Button';

export const RecognitionVoice = ({
  children,
  disabled="",
  styledButton = 'secondary-icon'
}) => {
  const [action, setAction] = useState('record');
  const recognition = new webkitSpeechRecognition();
  let lastSaid = null;
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = true;

  const startRecording = () => {
    console.log('holaa foo');
    recognition.start();
    setAction('listening')
  };

  const stopRecording = () => {
    if (lastSaid) {
      let strText = '';
      lastSaid = [...lastSaid];
      console.log('lastSaid', lastSaid);
      lastSaid.forEach((element) => {
        strText += element[0].transcript;
      });
      console.log('strText', strText);
    }
    recognition.stop();
    setAction('record')
  };

  recognition.onresult = function (event) {
    lastSaid = event.results;
  };

  const hanldeRecord = () => {
    if (action === 'record') {
      startRecording();
    } else {
      stopRecording();
    }
  }

  return (
    <Fragment>
      <Button
        type='button'
        onClick={hanldeRecord}
        icon={action === 'record' ? 'mic' : 'mic_off'}
        label=''
        disabled={disabled}
        styled={styledButton}
      />
      {children && children}
    </Fragment>
  )
}
