import React, { useState } from 'react'
import { Button } from '../Button'
import css from './Dropdown.module.css'

export const Dropdown = ({
  icon = '',
  children,
  hasAriaLabel = false,
  label,
  addClass
}) => {
  const [Expanded, SetExpanded] = useState(false)

  const toggleMenu = () => {
    Expanded ? SetExpanded(false) : SetExpanded(true)
  }

  const closeMenu = () => {
    SetExpanded(false)
  }

  const closeMenuOnEsc = (e) => {
    if ((e.keyCode || e.which) === 27) SetExpanded(false)
  }

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
        {icon}
        {label}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 24 24'
          focusable='false'
          aria-hidden='true'
          className={css['dropdownArrow']}
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M7 10l5 5 5-5z'></path>
        </svg>
      </Button>
      {/* <button
        aria-expanded={Expanded}
        className={`${css.DropdownCont} ${addClass} `}
        onClick={toggleMenu}
        onBlur={closeMenu}
        onKeyDown={closeMenuOnEsc}
      >
        {icon}
        {label}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 24 24'
          focusable='false'
          aria-hidden='true'
          className={css['dropdownArrow']}
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M7 10l5 5 5-5z'></path>
        </svg>
      </button> */}
      <ul role='list' className={css.dropdownMenu}>
        {children}
      </ul>
    </div>
    // <div
    //   className={`${css.DropdownCont} ${addClass} `}
    //   onMouseOver={HandleChange}
    //   onMouseOut={HandleChange}
    //   tabIndex='1'
    // >
    //   {icon && <Icon nameIcon={icon} />}
    //   <ul>
    //     <li className={css.navItem}>
    //       <span
    //         className={css.navLink}
    //         id='navbarDropdown'
    //         role='button'
    //         data-toggle='dropdown'
    //         aria-haspopup='true'
    //         aria-expanded={Expanded}
    //       >
    //         {label}
    //       </span>
    //       <div className={css.dropdownMenu} aria-labelledby='navbarDropdown'>
    //         {React.Children.map(childsElem, (elem, idx) => (
    //           <div className={css['dropdownMenu-item']} key={idx}>
    //             {elem}
    //           </div>
    //         ))}
    //       </div>
    //     </li>
    //   </ul>
    //   <Icon nameIcon={Expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
    // </div>
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
