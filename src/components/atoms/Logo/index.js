import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import imageFile from '../../../static/logo.svg'
import imageFileColor from '../../../static/logoColor.svg'
import cssLogo from './Logo.module.css'

export function Logo({ typeLogo, addClass }) {
  const setLogo = (useLogo) => {
    if (useLogo == 'logoCover') {
      return imageFile
    } else if (useLogo == 'logoPage') {
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
