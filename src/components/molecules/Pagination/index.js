import React, { Fragment, useState } from 'react'
import { Button } from '../../atoms/Button'
import css from './Pagination.module.css'

export const Pagination = ({
  pagOva = [
    { url: '#1' },
    { url: '#2' },
    { url: '#3' },
    { url: '#4' },
    { url: '#5' },
    { url: '#6' }
  ] // recibe un array de objetos con las rutas a usar
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    const next = pagOva.length > currentPage + 1 ? currentPage + 1 : currentPage
    const url = pagOva[next]?.url //extrae las url del arreglo
    setCurrentPage(next)
  }

  const prevPage = () => {
    const prev = currentPage > 0 ? currentPage - 1 : currentPage
    const url = pagOva[prev]?.url //extrae las url del arreglo
    setCurrentPage(prev)
  }

  const page = pagOva.map((item, i) => (
    <li className={css.styleLi}>
      <a
        key={window.self.crypto.randomUUID()}
        href={item.url}
        className={`${currentPage === i && css.active}`} //cuando hacemos el click en el enlace se activa el focus
        onClick={() => {
          setCurrentPage(i)
        }}
      >
        {i + 1}
      </a>
    </li>
  ))

  return (
    <Fragment>
      <ul className={css.styleUl}>
        <li>
          <Button
            className={css.styleBtn}
            onClick={prevPage}
            icon='chevron_left'
          />
        </li>
        {page}
        <li>
          <Button
            className={css.styleBtn}
            onClick={nextPage}
            icon='chevron_right'
          />
        </li>
      </ul>
    </Fragment>
  )
}
