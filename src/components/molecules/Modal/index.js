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
        tabIndex='-1'
      >
        <div className={css['c-modal__content']}>{children}</div>
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
