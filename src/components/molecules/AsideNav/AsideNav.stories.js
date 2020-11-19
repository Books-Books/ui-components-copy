import React from 'react'
import AsideNav from './index'

export default {
  title: 'Molecules/AsideNav',
  component: AsideNav
}

const Template = (args) => <AsideNav {...args} />

export const baseAside = Template.bind({})
baseAside.args = {
  dataButton: {
    label: 'Side nav',
    styled: 'primary'
  },
  content: {
    title: 'Aside Nav',
    list: ['List 1', 'List 2', 'List3']
  }
}
