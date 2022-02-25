import React from 'react'

export const ModalButton = ({ openModal }) => {
  return (
    <>
      <button onClick={(event) => openModal(event)}>Abrir modal</button>
      <div role='dialog' id='modalTest' tabIndex='0'>
        Modal
      </div>
    </>
  )
}
