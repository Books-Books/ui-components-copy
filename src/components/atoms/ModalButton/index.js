import React from 'react'

export const ModalButton = (openModal) => {
  return <button onClick={(event) => openModal(event)}>Abrir modal</button>
}
