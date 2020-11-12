import React from 'react'
import { InputField } from './index'

export default {
  title: 'Atoms/Input Field',
  component: InputField,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label'
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'password', 'date', 'email']
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    }
  }
}

const template = (args) => <InputField {...args} />

export const InputText = template.bind({})
InputText.storyName = 'Input Field'
InputText.args = {
  type: 'text'
}
