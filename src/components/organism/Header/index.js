import React, { Fragment } from 'react'
import { Logo } from '../../atoms/Logo'
import { UserLogin } from '../../atoms/UserSession'
import { NavBar } from '../../molecules/NavBar'
import cssHeader from './Header.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: invoca la union del logo, navbar, usersession para formar el header
 * param { addClass }
 * - addClass: para agregar nuevas classes
 * - Nota: cada componente invocado recibe los parametros ya nombrados en cada uno de ellos.
 **/
export function Header({ addClass, paths }) {
  return (
    <Fragment>
      <header className={cssHeader.container}>
        <Logo />
        <NavBar contentOva={paths}/>
        <UserLogin />
      </header>
    </Fragment>
  )
}
