import React from 'react'
import { Input } from './index'

export default {
  title: 'Atoms/Input',
  component: Input,
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
    }
  }
}

const template = (args) => <Input {...args} />

export const InputText = template.bind({})
