import React from 'react'
import { Button } from '../../atoms'
import { Tooltip } from './'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
}

export const TooltipDefault = () => {
  return (
    <Tooltip addClass='prb' id='test' content='Descripción'>
      <Button
        styled='secondary'
        hasAriaLabel={false}
        label='Secondary button'
        aria-labelledby='test'
      />
    </Tooltip>
  )
}
