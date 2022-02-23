import PropTypes from 'prop-types'
import React, { createRef, Fragment, useEffect, useState } from 'react'
import { Button } from '../../atoms/Button/index'
import { Image } from '../../atoms/Image/index'
import css from './Modal.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un modal que se puede cerrar al hacer clic en el botón, en el overlay que está por fuera o en al presionar la tecla Esc
 * param { children, title, text }
 * - children: elemento que va dentro del modal. Si no hay children, irá el contenido que se use en title y text.
 * - title: título del modal
 * - text: Nodos de texto dentro del modal.
 **/

export const Modal = ({
  children,
  label,
  styled,
  hasAriaLabel = false,
  title,
  text,
  hasImage = false,
  url,
  alt,
  imgTitle,
  typeImg,
  dataStyle,
  width
}) => {
  const [getModal, setModal] = useState(false)
  const refModal = createRef()
  const refOverlay = createRef()

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
      <>
        {hasImage ? (
          <button
            className={css['modal-button-image']}
            onClick={handleModal}
            aria-label={label}
          >
            <Image
              url={url}
              alt={alt}
              dataStyle={dataStyle}
              title={imgTitle}
              typeImg={typeImg}
              width={width}
            />
          </button>
        ) : (
          <Button
            label={label}
            styled={styled}
            onClick={handleModal}
            icon=''
            hasAriaLabel={hasAriaLabel}
          />
        )}
      </>
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
  children: PropTypes.element
}

Modal.defaultProps = {
  label: 'modal',
  stylde: 'primary',
  title: 'Titulo',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}
