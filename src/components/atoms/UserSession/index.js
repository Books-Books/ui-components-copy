import React, { Fragment } from 'react'
import cssUser from './UserSession.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: muestra el numero del estudiante activo
 * param { title, subTitle }
 * - label: recibe un string con el nombre o dato del estudiante.
 * - addClass: para ingresar clases adicionales.
 **/
export function UserLogin({
  addClass,
  label = 'Estudiante 01',
  showWelcome = true
}) {
  return (
    <Fragment>
      <div className={`${cssUser.colorTextUser} ${addClass}`}>
        <h3>
          <span className={!showWelcome ? `${cssUser.spanWelcome}` : ''}>
            Bienvenido:{' '}
          </span>
          {label}
        </h3>
      </div>
    </Fragment>
  )
}
