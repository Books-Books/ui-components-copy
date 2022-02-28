import React, { Fragment } from 'react'
import { Button, Image } from '../index'
import css from './ModalButton.module.css'

export const ModalButton = ({
  hasImage = true,
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
    modal.hidden = false
    modal.focus()
  }

  return (
    <Fragment>
      {hasImage ? (
        <button
          className={css['.modal-button-image']}
          aria-labelledby={`modalDescription${id}`}
          aria-description='Abrir modal'
          onClick={() => openModal(id)}
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
