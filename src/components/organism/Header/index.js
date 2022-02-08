import React, { Fragment } from 'react'
import { Logo } from '../../atoms/Logo'
import { UserLogin } from '../../atoms/UserSession'
import { NavBar } from '../../molecules/NavBar'
import cssHeader from './Header.module.css'

export function Header(addClass) {
  return (
    <Fragment>
      <header className={cssHeader.container}>
        <Logo />
        <NavBar />
        <UserLogin />
      </header>
    </Fragment>
  )
}
