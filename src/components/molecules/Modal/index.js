import React, { Fragment } from 'react'
import { closeModal, closeModalOnEsc } from '../../../helpers/closeModal'
import css from './Modal.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un modal que se puede cerrar al hacer clic en el botón, en el overlay que está por fuera o en al presionar la tecla Esc
 * param { children, id }
 * - children: contenido del modal
 * - id: número que identificará al botón | OBLIGATORIO
 **/

export const Modal = ({ children, id }) => {
  // const closeModal = function (id) {
  //   const modal = document.getElementById(`modal${id}`)
  //   const buttonModal = document.getElementById(`openModal${id}`)
  //   const modalOverlay = document.getElementById(`modalOverlay${id}`)

  //   // Agrega el atributo de hidden al modal y enfoca el botón que abre dicho modal
  //   modal.hidden = true
  //   buttonModal.focus()

  //   // Oculta el modal
  //   modal.classList.remove(css['modal--active'])
  //   modalOverlay.classList.remove(css['overlay--active'])

  //   // Regresa el scroll al cuerpo del sitio
  //   document.body.classList.remove(css['has-modal'])
  // }

  // // Hacer que se pueda salir del modal presionando la tecla Esc
  // function closeModalOnEsc(e, id) {
  //   if ((e.keyCode || e.which) === 27) {
  //     closeModal(id)
  //   }
  // }

  document.body.addEventListener('keydown', function (e) {
    closeModalOnEsc(e, id)
  })

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
        <div className='modal-start' tabIndex='0'></div>
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
