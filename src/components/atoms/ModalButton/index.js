import React, { Fragment } from 'react'
import { createKeyboardTrap, openModal } from '../../../helpers/openModal'
import { Button, Image } from '../index'
import css from './ModalButton.module.css'
/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón que abre un modal
 * param { hasImage, label, id, url, title, alt, typeImage, dataStyle, width, addClass }
 * - hasImage: determina si el botón va a tener una imagen o no. Por defecto es false
 * - id: número que identificará al botón | OBLIGATORIO
 * - label: etiqueta del botón | OBLIGATORIO
 * - url: ruta de la imagen | Solo si hasImage = true
 * - title: título del caption de la imagen | Solo si hasImage = true
 * - typeImage: tipo de borde que llevará la imagen | Solo si hasImage = true
 * - dataStyle: estilo de los bordes de la imagen | Solo si hasImage = true
 * - width: ancho máximo en pixeles de la imagen, por defecto es 350 | Solo si hasImage = true
 * - addClass: clase extra que se añadirá al botón
 **/

export const ModalButton = ({
  hasImage = false,
  label,
  id,
  url,
  alt,
  typeImage,
  dataStyle,
  width = 350,
  addClass,
  title
}) => {
  const handleClick = function (e, id) {
    openModal(id)
    createKeyboardTrap(e, id)
  }
  return (
    <Fragment>
      {hasImage ? (
        <button
          className={`${css['modal-button-image']} ${addClass}`}
          aria-labelledby={`modalDescription${id}`}
          aria-description='Abrir modal'
          onClick={(e) => handleClick(e, id)}
          id={`openModal${id}`}
        >
          <span className='sr-only' id={`modalDescription${id}`}>
            {label}
          </span>
          <Image
            url={url}
            alt={alt}
            title={title}
            typeImage={typeImage}
            dataStyle={dataStyle}
            width={width}
          />
        </button>
      ) : (
        <Button
          id={`openModal${id}`}
          aria-description='Abrir modal'
          hasAriaLabel={false}
          label={label}
          onClick={(e) => handleClick(e, id)}
          addClass={addClass}
        />
      )}
    </Fragment>
  )
}
