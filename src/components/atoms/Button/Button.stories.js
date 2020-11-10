import React from 'react'
import { Button } from './index'

export default {
  title: 'Atoms/Buttons',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked', table: { disable: true } },
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
      description: 'Aqui va el contenido del boton.',
      defaultValue: 'Button',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: { summary: 'Button' }
      }
    }
  }
}

const template = (args) => <Button {...args} />

export const ButtonDefault = template.bind({})
ButtonDefault.storyName = 'Button'
export const ButtonDefaultWithIconLeft = template.bind({})
ButtonDefaultWithIconLeft.storyName = 'Button icon left'
ButtonDefaultWithIconLeft.args = {
  icon: {
    nameIcon: 'edit'
  }
}

export const ButtonDefaultWithIconRight = template.bind({})
ButtonDefaultWithIconRight.storyName = 'Button icon left'
ButtonDefaultWithIconRight.args = {
  icon: {
    nameIcon: 'edit',
    reverse: true
  }
}
