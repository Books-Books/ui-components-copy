import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import { Icon } from '../icon'
import css from './Dropdown.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un botón de dropdown que al hacer clic muestra u oculta un contenido
 * param { icon, label, addClass, ulClass, isExpanded }
 * - icon: ícono que será usado en el botón de dropdown (opcinal)
 * - label: etiqueta del botón.
 * - addClass: clase adicional que se le agregue al botón.
 * - ulClass: clase adicional que se le puede agregar al contenedor del menú dropdown.
 * - isExpanded: determina si está desplegado. Por defecto es false
 **/

export const Dropdown = ({
  icon = '',
  children,
  hasAriaLabel = false,
  label,
  addClass,
  svgHide,
  ulClass,
  isExpanded = false, // props que utilizamos en el UseEffect para cambiar el estado desplegable
  fnMenuExpanded // funcion que retornamos desde el componente NavBar para reiniciar el estado de isExpanded
}) => {
  let [Expanded, SetExpanded] = useState(false)

  // Cambia el estado de activado a desactivado
  const toggleMenu = () => {
    Expanded ? SetExpanded(false) : SetExpanded(true)
  }

  // Cierra el menú al hacer clic fuera del menú
  const closeMenu = (e) => {
    console.log(e)
    if (e.relatedTarget === null) {
      SetExpanded(false)
      typeof fnMenuExpanded === 'function' && fnMenuExpanded(false)
    } else {
      SetExpanded(false)
    }
  }

  // Cierra el menú al presionar la tecla Esc
  const closeMenuOnEsc = (e) => {
    if ((e.keyCode || e.which) === 27) SetExpanded(false)
  }

  useEffect(() => {
    SetExpanded(isExpanded)
  }, [isExpanded])

  return (
    <div className={css['dropdownContainer']}>
      <Button
        hasAriaLabel={hasAriaLabel}
        aria-expanded={Expanded}
        className={`${css.DropdownCont} ${addClass} `}
        onClick={toggleMenu}
        onBlur={closeMenu}
        onKeyDown={closeMenuOnEsc}
      >
        <Icon nameIcon={icon} />
        {label}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 24 24'
          focusable='false'
          aria-hidden='true'
          className={css['dropdownArrow']}
          hide={svgHide}
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M7 10l5 5 5-5z'></path>
        </svg>
      </Button>
      <ul
        role='list'
        className={`${css.dropdownMenu} ${ulClass}`}
        onBlur={closeMenu}
      >
        {children}
      </ul>
    </div>
  )
}

Dropdown.defaultProps = {
  icon: 'lock',
  addClass: '',
  label: 'Dropdown',
  arrItems: [
    {
      label: 'primer item',
      key: 1,
      link: 'el_link',
      icon: 'palette'
    },
    {
      label: 'segundo item',
      key: 2,
      link: 'el_link'
    }
  ]
}
