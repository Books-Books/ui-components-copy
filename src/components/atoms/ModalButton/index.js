import React, { Fragment } from 'react'

export const ModalButton = ({ openModal }) => {
  const focusModal = function (id) {
    document.getElementById(id).focus()
  }

  return (
    <Fragment>
      <button
        onClick={(event) => {
          openModal(event), focusModal('modalTest')
        }}
      >
        Abrir modal
      </button>
      <div role='dialog' id='modalTest' tabIndex='0'>
        Modal
      </div>
    </Fragment>
  )
}
