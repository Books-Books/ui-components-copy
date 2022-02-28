import React, { Fragment, useEffect } from 'react'
import css from './Modal.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un modal que se puede cerrar al hacer clic en el botón, en el overlay que está por fuera o en al presionar la tecla Esc
 * param { children, title, text }
 * - children: elemento que va dentro del modal. Si no hay children, irá el contenido que se use en title y text.
 * - title: título del modal
 * - text: Nodos de texto dentro del modal.
 **/

export const ModalTest = ({ children, id }) => {
  const closeModal = function (id) {
    const modal = document.getElementById(`modal${id}`)
    const buttonModal = document.getElementById(`openModal${id}`)
    const modalOverlay = document.getElementById(`modalOverlay${id}`)

    modal.hidden = true
    buttonModal.focus()

    modal.classList.remove(css['modal--active'])
    modalOverlay.classList.remove(css['overlay--active'])
    document.body.classList.remove(css['has-modal'])
  }
  // Hacer que se pueda salir del modal presionando la tecla Esc

  function closeModalOnEsc(e, id) {
    if ((e.keyCode || e.which) === 27) {
      closeModal(id)
    }
  }

  useEffect(() => {
    if (setModal) {
      document.addEventListener('keydown', closeModalOnEsc)
    } else {
      document.removeEventListener('keydown', closeModalOnEsc, false)
    }
  }, [])

  return (
    <Fragment>
      <div
        className={`${css['c-modal-overlay']} ui-modal-overlay`}
        id={`modalOverlay${id}`}
        onClick={() => {
          closeModal(id)
        }}
      />
      <div
        role='dialog'
        className={`${css['c-modal']} ui-modal`}
        id={`modal${id}`}
        hidden={true}
        onKeyDown={closeModalOnEsc(id)}
      >
        <div class='modal-start' tabIndex='0'></div>
        {children}
        <button
          className={`${css['c-modal__close-button']}`}
          onClick={() => {
            closeModal(id)
          }}
          id={`closeModal${id}`}
        >
          <span aria-hidden='true'>&times;</span>
          <span className='sr-only'>Cerrar modal</span>
        </button>
      </div>
    </Fragment>
  )
}
