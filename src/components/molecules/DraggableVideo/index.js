import React, { useState } from 'react'
import { Icon } from '../../atoms/icon/index'
import { Video } from '../../atoms/Video/index'
import css from './DraggableVideo.module.css'

export const DraggableVideo = ({ videoUrl, videoWidth }) => {
  const [dragged, setDragged] = useState(false)
  const [dragging, setDragging] = useState(false)

  const position = {
    top: 'var(--top, 0)',
    left: 'var(--left, 0)'
  }

  function draggingElement(event) {
    let getStyle = event.target.parentElement.classList
    getStyle.style.setProperty('--top', '100px')
    getStyle.style.setProperty('--left', '60px')
    console.log(getStyle.getPropertyValue('--top'))
    //   getStyle.style.setProperty('--left', '200px')
    // console.log(getStyle)
  }

  // function startClassDrag(event) {
  //   setDragged(true)
  //   setDragging(true)
  //   event.target.addEventListener('mousedown', draggingElement())
  // }

  // function stopClassDrag(event) {
  //   setDragging(false)
  //   event.target.removeEventListener('mousemove', draggingElement())
  // }

  return (
    <div
      className={`${css['draggable-video-container']} ${
        dragging ? css['dragging'] : ''
      } ${dragged ? css['dragged'] : ''}`}
      draggable
      style={position}
    >
      <button
        className={css['draggable-video-button']}
        // onMouseDown={startClassDrag}
        // onMouseUp={stopClassDrag}
        onClick={draggingElement}
      >
        <Icon nameIcon='open_with' />
        <span className='sr-only'>Mover en la pantalla</span>
      </button>
      <Video url={videoUrl} width={videoWidth} />
    </div>
  )
}
