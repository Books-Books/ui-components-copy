import React, { useState } from 'react'
import { Icon } from '../icon'
import { Link } from '../Link'
import css from './Dropdown.module.css'

export const Dropdown = ({ icon, arrItems, label }) => {
  const [Expanded, SetExpanded] = useState(false)

  function HandleChange() {
    SetExpanded(!Expanded)
  }
  return (
    <div className={css.DropdownCont} onClick={HandleChange}>
      {icon && <Icon nameIcon={icon} />}
      <ul>
        <li className={css.navItem}>
          <span
            className={css.navLink}
            id='navbarDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded={Expanded}
          >
            {label}
          </span>
          <div className={css.dropdownMenu} aria-labelledby='navbarDropdown'>
            {arrItems.map((elem, idx) => (
              <div className={css['dropdownMenu-item']} key={elem.key}>
                <Link label={elem.label} href={elem.link} />
              </div>
            ))}
          </div>
        </li>
      </ul>
      <Icon nameIcon='keyboard_arrow_down' />
    </div>
  )
}

Dropdown.defaultProps = {
  icon: 'lock',
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
