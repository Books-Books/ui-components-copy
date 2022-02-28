import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import cssLogo from './Logo.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Tiene como finalidad mostrar el logo.
 * - addClass: para ingresar clases adicionales.
 **/
export function Logo({ src, typeLogo, addClass }) {
  return (
    <Fragment>
      <div className={`${addClass}`}>
        <img src={src} className={cssLogo['imgLogo']} />
      </div>
    </Fragment>
  )
}

Logo.propTypes = {
  typeLogo: PropTypes.string.isRequired
}

Logo.defaultProps = {
  typeLogo: 'logoPage'
}
