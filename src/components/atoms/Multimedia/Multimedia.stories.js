import React from 'react'
import { Multimedia } from './index'

export default {
  title: 'Atoms/Multimedia',
  component: Multimedia
}

const Template = (args) => <Multimedia {...args} />

export const baseAudio = Template.bind({})
baseAudio.args = {
  type: 'audio',
  url:
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3'
}

export const TextAudio = Template.bind({})
TextAudio.args = {
  type: 'audio',
  url:
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/33378/soundcloud-austin-stephens-Auto_Tuned_Native_American_Flute.mp3',
  label: 'Audio'
}

export const baseVideo = Template.bind({})
baseVideo.args = {
  type: 'video',
  url:
    'https://storage.googleapis.com/cedoc360extencion/a_english_multimedia/a1/module_1/videos/a1m1a-ae_vid_1.mp4',
  width: '400px'
}
