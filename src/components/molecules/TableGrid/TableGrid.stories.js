import React from 'react'
import { Button } from '../../atoms/Button'
import { TableGrid } from './index'

export default {
  title: 'Molecules/TableGrid',
  component: TableGrid
}

const Template = (args) => <TableGrid {...args} />
const button = () => <Button label='ejemplo' styled='primary' />

export const baseTable = Template.bind({})
baseTable.args = {
  headContent: [
    { type: 'default', label: 'head1' },
    { type: 'default', label: 'head2' },
    { type: 'icon', label: 'restore' }
  ],
  bodyContent: [
    [button, button, button],
    [button, button, button],
    [button, button, button]
  ],
  gridColumn: {
    gridTemplateColumns: '1fr 1fr 1fr'
  }
}
