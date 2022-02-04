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
    label: 'Abrir modal',
    styled: 'primary',
    hasAriaLabel: false
  },
  title: 'Modal',
  text: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
      porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem{' '}
      <strong>ab cumque</strong> est necessitatibus fuga tempore{' '}
      <em>ipsum vitae</em> dolores impedit quae!
    </p>
  )
}
