import React from 'react'
import { DropableItem } from './index'

export default {
  title: 'Atoms/DropableItem',
  component: DropableItem
}

const Template = (args) => <DropableItem {...args} />

export const baseDropableItem = Template.bind({})
baseDropableItem.args = {
  item: {
    dataIcon: 'place',
    title: 'Example 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum,'
  },
  index: '1'
}
