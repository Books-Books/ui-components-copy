import React from 'react'
import { Fragment } from 'react-is'
import cssUser from './UserSession.module.css'

export function UserLogin({ addClass, label = 'Estudiante 01' }) {
  return (
    <Fragment>
      <div className={`${cssUser.colorTextUser} ${addClass}`}>
        <h3>{label}</h3>
      </div>
    </Fragment>
  )
}
