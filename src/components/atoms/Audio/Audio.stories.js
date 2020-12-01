import React from 'react'
import { Audio } from './Index'

export default {
  title: 'Atoms/Audio',
  component: Audio
}

const Template = (args) => <Audio {...args} />

export const baseAudio = Template.bind({})
baseAudio.args = {
  url:
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3'
}
