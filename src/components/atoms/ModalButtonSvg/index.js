import React from 'react'
import { createKeyboardTrap, openModal } from '../../../helpers/openModal'
import css from './ModalButtonSvg.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón que abre un modal
 * param { label, id, uaddClass }
 * - id: número que identificará al botón | OBLIGATORIO
 * - label: etiqueta del botón | OBLIGATORIO
 * - addClass: clase extra que se añadirá al botón
 **/

export const ModalButtonSvg = ({ label, id, addClass, children }) => {
  const openModalWithSpace = function (e, id) {
    if ((e.keyCode || e.which) === 32 || (e.keyCode || e.which) === 13) {
      openModal(id)
    }
  }

  const handleClick = function (e, id) {
    openModal(id)
    createKeyboardTrap(e, id)
  }

  return (
    <a
      id={`openModal${id}`}
      className={`${css['modal-button']} ${addClass}`}
      role='button'
      onClick={(e) => handleClick(e, id)}
      onKeyDown={(e) => openModalWithSpace(e, id)}
      aria-label={label}
      xLinkHref=''
    >
      {children}
    </a>
  )
}
