import React, { Fragment } from 'react'
import { Toggletip } from '.'

export default {
  title: 'Atoms/Toggletip',
  component: Toggletip
}

export const ToggletipDefault = () => {
  const instruction = (
    <Fragment>
      <p>Contenido del toggletip</p>
      <p>
        Se usa para dar información más <em>detallada</em>
      </p>
    </Fragment>
  )

  return <Toggletip content={instruction} />
}
