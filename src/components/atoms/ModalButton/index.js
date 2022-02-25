import React, { Fragment } from 'react'
import { openModal } from '../../../helpers/openModal'

export const ModalButton = (id) => {
  return (
    <Fragment>
      <button onClick={() => openModal(id)}>Abrir modal</button>
    </Fragment>
  )
}
