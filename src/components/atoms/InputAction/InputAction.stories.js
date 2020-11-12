import React from 'react'
import { InputAction } from './'
export default {
  title: 'Atoms/Inputs',
  component: InputAction,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
      description: 'Aqui se puede escoger entre "primary" y "secondary" ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    }
  }
}

const Template = (args) => <InputAction {...args} />
export const Input = Template.bind({})
Input.storyName = 'Input Action'
