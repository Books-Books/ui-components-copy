import PropTypes from 'prop-types'
import React, { createRef, Fragment, useEffect, useState } from 'react'
import { Button } from '../../atoms/Button/index'
import css from './Modal.module.css'

export const Modal = ({ children, dataButton, title, text }) => {
  const [getModal, setModal] = useState(false)
  const refModal = createRef()
  const refOverlay = createRef()

  const modalIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='svg-icon'
      focusable='false'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z'></path>
    </svg>
  )

  // Abrir y cerrar el modal
  function stateModal(elementModal, elementOverlay) {
    if (getModal) {
      elementModal.classList.remove(css['modal--active'])
      elementOverlay.classList.remove(css['overlay--active'])
      setModal(false)
    } else {
      elementModal.classList.add(css['modal--active'])
      elementOverlay.classList.add(css['overlay--active'])
      setModal(true)
    }
  }

  // Solo cerrar el modal (usado en la función closeModalOnEsc)

  function closeModal(elementModal, elementOverlay) {
    elementModal.classList.remove(css['modal--active'])
    elementOverlay.classList.remove(css['overlay--active'])
    setModal(false)
  }

  // Event listener para abrir y cerrar el modal

  function handleModal() {
    const $modal = refModal.current
    const $overlay = refOverlay.current
    stateModal($modal, $overlay)
  }

  // Hacer que se pueda salir del modal presionando la tecla Esc

  function closeModalOnEsc(e) {
    if ((e.keyCode || e.which) === 27) {
      const $modal = refModal.current
      const $overlay = refOverlay.current
      closeModal($modal, $overlay)
    }
  }

  useEffect(() => {
    if (setModal) {
      document.addEventListener('keydown', closeModalOnEsc)
    } else {
      document.removeEventListener('keydown', closeModalOnEsc, false)
    }
  }, [getModal])

  return (
    <Fragment>
      <Button
        label={dataButton.label}
        styled={dataButton.styled}
        onClick={handleModal}
        icon={modalIcon}
        hasAriaLabel={dataButton.hasAriaLabel}
      />
      <div
        ref={refOverlay}
        className={`${css['c-modal-overlay']} ui-modal-overlay`}
        id='overlay'
        onClick={handleModal}
      />
      <div
        role='dialog'
        ref={refModal}
        className={`${css['c-modal']} ui-modal`}
        id='modal'
      >
        {children || (
          <div className='ui-modal-content'>
            <h3> {title} </h3>
            <p> {text} </p>
          </div>
        )}
        <button
          className={`${css['c-modal__close-button']}`}
          onClick={handleModal}
          style={{ cursor: 'pointer' }}
          onKeyDown={closeModalOnEsc}
        >
          <span aria-hidden='true'>&times;</span>
          <span className='sr-only'>Cerrar modal</span>
        </button>
      </div>
    </Fragment>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
  dataButton: PropTypes.object
}

Modal.defaultProps = {
  dataButton: {
    label: 'modal',
    stylde: 'primary'
  },
  title: 'Titulo',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}
