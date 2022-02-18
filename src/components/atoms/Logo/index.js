import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import imageFile from '../../../static/logo.svg'
import imageFileColor from '../../../static/logoColor.svg'
import cssLogo from './Logo.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Tiene como finalidad mostrar el logo.
 * param { typeLogo, addClass }
 * - typeLogo: recibe dos tipos de logo "logoCover" o "logoPage"
 * - addClass: para ingresar clases adicionales.
 **/
export function Logo({ typeLogo, addClass }) {
  const setLogo = (typeLogo) => {
    if (typeLogo == 'logoCover') {
      return imageFile
    } else if (typeLogo == 'logoPage') {
      return imageFileColor
    }
  }
  return (
    <Fragment>
      <div className={`${addClass}`}>
        <img src={setLogo(typeLogo)} className={cssLogo['imgLogo']} />
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
