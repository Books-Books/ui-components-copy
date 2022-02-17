import React, { Fragment, useState } from 'react'
import { PanelSection } from '../../organism/PanelSection'
import css from './PaginationInternal.module.css'

export const PaginationInternal = ({
  pagOva = [
    {
      id: 1,
      label: '1',
      url: '#'
    },
    {
      id: 2,
      label: '2',
      url: '#'
    },
    {
      id: 3,
      label: '3',
      url: '#'
    },
    {
      id: 4,
      label: '4',
      url: '#'
    },
    {
      id: 5,
      label: '5',
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
