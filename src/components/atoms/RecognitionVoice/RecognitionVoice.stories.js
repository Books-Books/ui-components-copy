import React from 'react'
import { RecognitionVoice } from './'

export default {
  title: 'Atoms/RecognitionVoice',
  component: RecognitionVoice
}

const Template = (args) => <RecognitionVoice {...args} />

export const RecognitionVoiceDefault = Template.bind({})

RecognitionVoiceDefault.args = {
  setdata: (e) => console.log(e)
}
