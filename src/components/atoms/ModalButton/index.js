import React, { Fragment } from 'react'
import modalCss from '../../molecules/Modal/Modal.module.css'
import { Button, Image } from '../index'
import css from './ModalButton.module.css'

export const ModalButton = ({
  hasImage = false,
  label,
  id,
  url,
  alt,
  typeImage,
  dataStyle,
  width,
  addClass
}) => {
  const openModal = function (id) {
    const modal = document.getElementById(`modal${id}`)
    const modalFocus = modal.querySelector('.modal-start')
    const modalOverlay = document.getElementById(`modalOverlay${id}`)

    modal.hidden = false
    modalFocus.focus()

    modal.classList.add(modalCss['modal--active'])
    modalOverlay.classList.add(modalCss['overlay--active'])
    document.body.classList.add(modalCss['has-modal'])
  }

  return (
    <Fragment>
      {hasImage ? (
        <button
          className={css['modal-button-image']}
          aria-labelledby={`modalDescription${id}`}
          aria-description='Abrir modal'
          onClick={() => openModal(id)}
          id={`openModal${id}`}
        >
          <span className='sr-only' id={`modalDescription${id}`}>
            {label}
          </span>
          <Image
            url={url}
            alt={alt}
            typeImage={typeImage}
            dataStyle={dataStyle}
            width={width}
            addClass={addClass}
          />
        </button>
      ) : (
        <Button
          id={`openModal${id}`}
          aria-description='Abrir modal'
          hasAriaLabel={false}
          label={label}
          onClick={() => openModal(id)}
          addClass={addClass}
        />
      )}
    </Fragment>
  )
}
