import React, { useState } from 'react'
import { Icon } from '../icon'
import css from './DarkThemeToggle.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón que cambia entre el modo claro y oscuro del sitio
 * param { addClass }
 * - addClass: clase adicional que se le agregue al botón.
 **/

export const DarkThemeToggle = ({ addClass }) => {
  const [pressed, setPressed] = useState(false)

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

<<<<<<< HEAD
  // Cambia entre ambos modos

=======
>>>>>>> e2a74ce94855caf0ae78f858c00f92bc0122b23d
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
      <Icon nameIcon='mode_night' />
      <span className={css.spanText}>Modo Nocturno</span>
    </button>
  )
}
