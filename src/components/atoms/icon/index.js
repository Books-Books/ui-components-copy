import React from 'react'
import { IconStyled } from './style'
import { useSelectIcon } from './iconHook'

export const Icon = ({ nameIcon }) => {
  const pathString = useSelectIcon(nameIcon)
  return (
    <IconStyled viewBox='0 0 24 24'>
      <path d={pathString} />
    </IconStyled>
  )
}
