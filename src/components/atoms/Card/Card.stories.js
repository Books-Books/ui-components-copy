import React from 'react'
import Card  from './index'

export default {
  title: 'Atoms/Cards',
  component: Card
}

const Template = (args) => <Card {...args} />

export const baseCard = Template.bind({})
baseCard.args = {
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  }
}

export const fullCard = Template.bind({})
fullCard.args = {
  image: {
    state: true,
    url: 'https://via.placeholder.com/300',
    alt: 'image'
  },
  content: {
    title: 'Card Title',
    text: 'Secondary Text'
  },
  supportingText: 'https://via.placeholder.com/300',
  buttons: {
    state: true,
    first: {
      label: 'Action 1',
      theme: 'primary'
    },
    secundary: {
      label: 'Action 2',
      theme: 'primary'
    }
  }
}
