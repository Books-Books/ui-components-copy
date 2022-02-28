import React from 'react'
import { openModal } from '../../../helpers/openModal'
import { Button } from '../Button'

export const ModalButton = ({ label, id }) => {
  return (
    <Button hasAriaLabel={false} label={label} onClick={() => openModal(id)} />
  )
}
