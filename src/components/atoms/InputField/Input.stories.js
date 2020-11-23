import React from 'react'
import { InputField } from './index'

export default {
  title: 'Atoms/Inputs Field',
  component: InputField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Aqui va el texto de ayuda del input',
      defaultValue: 'Label',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Label' }
      }
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
