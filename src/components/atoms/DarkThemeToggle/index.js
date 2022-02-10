import React, { useState } from 'react'
import css from './DarkThemeToggle.module.css'

/**
 * Fecha: 9 de febrero de 2022
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón que alterna entre el modo claro y el modo oscuro
 * param { addClass }
 * - addClass: clase adicional del botón para que coincida con los estilos del elemento al que se incorpore
 **/

export const DarkThemeToggle = (addClass = {}) => {
  const [pressed, setPressed] = useState(false) // Estado que alterna entre presionado y no presionado. Se usa para el atributo aria-pressed del botón

  // Activa el modo oscuro

  function enableDarkMode() {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    setPressed(true)
  }

  // Desactiva el modo oscuro

  function enableLightMode() {
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    setPressed(false)
  }

  const togglePressed = () => {
    document.body.classList.contains('light-theme')
      ? enableDarkMode()
      : enableLightMode()
  }

  return (
    <button
      className={`${css['toggle-button']} ${addClass}`}
      aria-pressed={pressed}
      onClick={togglePressed}
      type='button'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        aria-hidden='true'
        focusable='false'
        className='svg-icon'
      >
        <path fill='none' d='M0 0h24v24H0z'></path>
        <path d='M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z'></path>
      </svg>
      Modo Nocturno
    </button>
  )
}
