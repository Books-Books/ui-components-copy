import React, { Fragment, useState } from 'react'
import { PanelSection } from '../../organism/PanelSection'
import css from './PaginationInternal.module.css'

export const PaginationInternal = ({
  pagOva = [
    {
      id: 1,
      label: '',
      url: '#'
    },
    {
      id: 2,
      label: '',
      url: '#'
    },
    {
      id: 3,
      label: '',
      url: '#'
    },
    {
      id: 4,
      label: '',
      url: '#'
    },
    {
      id: 5,
      label: '',
      url: '#'
    }
  ]
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const length = pagOva.length
  //el props FunctValue mandan la función del useState hasta llegar al BtnSec
  return (
    <Fragment>
      <div className={css.direccion}>
        <span>
          {currentPage}/{length}
        </span>
        <PanelSection tabs={pagOva} FunctValue={setCurrentPage}></PanelSection>
      </div>
    </Fragment>
  )
}
