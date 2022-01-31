import React, { Fragment } from 'react'
import { Dropdown } from './'

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown
}

export const DropdownDefault = (args) => {
  const playButton = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='svg-icon'
      focusable='false'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M8 5v14l11-7z'></path>
    </svg>
  )

  return (
    <Fragment>
      <Dropdown icon={playButton}>
        <p>item_1</p>
        <p>item_2</p>
      </Dropdown>
      <Dropdown icon=''>
        <p>item_3</p>
        <p>item_4</p>
      </Dropdown>
    </Fragment>
  )
}
