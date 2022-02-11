import React, { useState } from 'react'
import { Icon } from '../icon'
import css from './DarkThemeToggle.module.css'

export const DarkThemeToggle = ({ addClass }) => {
  const [pressed, setPressed] = useState(false)

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
      <Icon nameIcon='mode_night' />
      <span className={css.spanText}>Modo Nocturno</span>
    </button>
  )
}
