import React from 'react'
import { Modal } from './index'

export default {
  title: 'Molecules/Modal',
  component: Modal
}

const Template = (args) => <Modal {...args} />

export const baseModal = Template.bind({})
baseModal.args = {
  dataButton: {
    label: 'Modal',
    styled: 'primary'
  },
  title: 'Modal',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!'
}
