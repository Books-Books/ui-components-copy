import React from 'react'
import { Toggletip } from '.'
import { Button } from '..'

export default {
  title: 'Atoms/Toggletip',
  component: Toggletip
}

// const template = (args) => <Tooltip {...args} />

export const TooltipDefault = () => (
  <Toggletip label='holis' addClass='prb' id='test' content='Descripción'>
    <Button
      styled='secondary'
      hasAriaLabel={false}
      label='Secondary button'
      aria-labelledby='test'
    />
  </Toggletip>
)
