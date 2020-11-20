import React from 'react'
import { Dropable } from './index'

export default {
  title: 'Molecules/Dropable',
  component: Dropable
}

const Template = (args) => <Dropable {...args} />

export const baseDropable = Template.bind({})

baseDropable.args = {
  width: '400px',
  content: [
    {
      title: 'Example 1',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
      dataIcon: 'filter_drama'
    },
    {
      title: 'Example 2',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
      dataIcon: 'place'
    },
    {
      title: 'Example 3',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
      dataIcon: 'whatshot'
    }
  ]
}
