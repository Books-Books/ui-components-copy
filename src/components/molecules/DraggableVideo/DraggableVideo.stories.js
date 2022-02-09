import React from 'react'
import { DraggableVideo } from './index'

export default {
  title: 'Molecules/DraggableVideo',
  component: DraggableVideo
}

export const DraggableDefault = () => {
  return (
    <DraggableVideo
      videoUrl='https://storage.googleapis.com/cedoc360extencion/a_english_multimedia/a1/module_1/videos/a1m1a-ae_vid_1.mp4'
      videoWidth='400px'
    />
  )

  // return <Fragment>Video</Fragment>
}
