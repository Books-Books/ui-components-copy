import React from 'react'

import { InputControl } from './'

export default {
  title: 'Atoms/Inputs Control',
  component: InputControl,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label'
    },
    type: {
      control: { type: 'select', options: ['radio', 'checkbox', 'toggle'] },
      defaultValue: 'radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radio' }
      }
    },
    onChange: { action: 'change' }
  }
}

const template = (args) => <InputControl {...args} />

export const InputCheckbox = template.bind({})
InputCheckbox.storyName = 'Input Control'
