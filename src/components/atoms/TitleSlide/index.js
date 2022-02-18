import React from 'react'
import { Fragment } from 'react-is'
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
      <section className={css.container}>
        <div className={css.containerNumber}>
          <div className={css.number}>
            <h2>{number}</h2>
          </div>
        </div>
        <div className={css.title}>
          <h3>{title}</h3>
        </div>
      </section>
    </Fragment>
  )
}
