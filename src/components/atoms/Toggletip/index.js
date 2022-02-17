import React, { useState } from 'react'
import { Button } from '../Button'
import css from './Toggletip.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un tooltip que es activado al hacer clic. Deja de mostrar contenido al dejar de enfocar el elemento o al presionar la tecla Esc
 * param { content }
 * - content: descripción que mostrará el toggletip.
 **/

export const Toggletip = ({ content }) => {
  const [toggletipContent, SetToggletipContent] = useState('')

  // Cambia contenido del toggletip entre nada y contenido
  const changeToggletipContent = () => {
    toggletipContent == ''
      ? SetToggletipContent(
          // Agregado en snap con esta clase para añadir estilos sin tener que tocar el span role="alert"
          <div className={css['toggletip-content']}>{content}</div>
        )
      : SetToggletipContent('')
  }

  // Elimina el contenido del span role="alert" (usado para el onBlur event)

  const emptyToggletipContent = () => {
    SetToggletipContent('')
  }

  // Elimina el contenido del span role="alert" al presionar la tecla Esc (usado para el onKeyDown event)

  const emptyToggletipContentOnEsc = (e) => {
    if ((e.keyCode || e.which) === 27) SetToggletipContent('')
  }

  return (
    <div className={css['toggletip-container']}>
      <Button
        hasAriaLabel='false'
        styled='primary-icon'
        label=''
        onClick={changeToggletipContent}
        onBlur={emptyToggletipContent}
        onKeyDown={emptyToggletipContentOnEsc}
      >
        <span className={css['toggletip-icon']} aria-hidden='true'>
          i
        </span>
        <span className='sr-only'>Más información</span>
      </Button>
      <div role='status'>{toggletipContent}</div>
    </div>
  )
}
