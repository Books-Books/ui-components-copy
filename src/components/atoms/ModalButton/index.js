import React from 'react'

export const ButtonModal = (openModal) => {
  return <button onClick={(event) => openModal(event)}>Abrir modal</button>
}
