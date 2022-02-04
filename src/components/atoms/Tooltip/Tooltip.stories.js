import { storiesOf } from '@storybook/react'
import React from 'react'
import { Button } from '../../atoms'
import { Tooltip } from './'

storiesOf('Atoms/Tooltip', module).add('Tooltip', () => (
  <Tooltip addClass='prb' id='test' content='Descripción'>
    <Button
      styled='secondary'
      hasAriaLabel={false}
      label='Secondary button'
      aria-labelledby='test'
    />
  </Tooltip>
))
