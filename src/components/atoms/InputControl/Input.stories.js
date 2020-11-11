import React from 'react'

import { InputControl } from './'

export default {
  title: 'Atoms/Inputs/Inputs Control',
  component: InputControl,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
      description: 'Aqui se puede escoger entre "primary" y "secondary" ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
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
    }
  }
}

const template = (args) => <InputControl {...args} />

export const InputCheckbox = template.bind({})
