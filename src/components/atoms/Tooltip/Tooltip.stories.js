import React from 'react'
import { Button } from '../../atoms'
import { Tooltip } from './'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
}

// const template = (args) => <Tooltip {...args} />

export const Tooltip = () => (
  <Tooltip addClass='prb' id='test' content='Descripción'>
    <Button
      styled='secondary'
      hasAriaLabel={false}
      label='Secondary button'
      aria-labelledby='test'
    />
  </Tooltip>
)
