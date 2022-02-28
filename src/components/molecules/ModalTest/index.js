import React, { Fragment } from 'react'
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
  // const refModal = createRef()
  // const refOverlay = createRef()

  const closeModal = function (id) {
    const modal = document.getElementById(`modal${id}`)
    const buttonModal = document.getElementById(`openModal${id}`)
    const modalOverlay = document.getElementById(`modalOverlay${id}`)

    modal.hidden = true
    buttonModal.focus()

    modal.classList.remove(css['modal--active'])
    modalOverlay.classList.remove(css['overlay--active'])
  }
  // Hacer que se pueda salir del modal presionando la tecla Esc

  function closeModalOnEsc(e) {
    if ((e.keyCode || e.which) === 27) {
      closeModal()
    }
  }

  return (
    <Fragment>
      <div
        className={`${css['c-modal-overlay']} ui-modal-overlay`}
        id={`modalOverlay${id}`}
        onClick={() => {
          closeModal()
        }}
      />
      <div
        role='dialog'
        className={`${css['c-modal']} ui-modal`}
        id={`modal${id}`}
        tabIndex='0'
        hidden
      >
        {children}
        <button
          className={`${css['c-modal__close-button']}`}
          onClick={() => {
            closeModal()
          }}
          onKeyDown={closeModalOnEsc}
          id={`closeModal${id}`}
        >
          <span aria-hidden='true'>&times;</span>
          <span className='sr-only'>Cerrar modal</span>
        </button>
      </div>
    </Fragment>
  )
}
