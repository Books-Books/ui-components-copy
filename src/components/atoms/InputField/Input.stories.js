import React from 'react'
import { InputField } from './index'

export default {
  title: 'Atoms/Inputs/Input Field',
  component: InputField,
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

const template = (args) => <InputField {...args} />

export const InputText = template.bind({})
InputText.args = {
  type: 'text'
}

export const InputNumber = template.bind({})
InputNumber.args = {
  type: 'number'
}
