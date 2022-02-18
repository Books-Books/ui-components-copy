import React, { Fragment } from 'react'
import css from './TitleSlide.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Tiene como finalidad mostrar una barra con el número de la pagina y su titulo.
 * param { typeLogo, addClass }
 * - number: numero de la página.
 * - title: titulo de la página.
 **/
export const TitleSlide = ({ number = '01.', title = 'Título del slide' }) => {
  return (
    <Fragment>
      <h1 className={css.container}>
        <div className={css.containerNumber}>
          <div className={css.number}>
            <span>{number}</span>
          </div>
        </div>
        <div className={css.title}>
          <span>{title}</span>
        </div>
      </h1>
    </Fragment>
  )
}
