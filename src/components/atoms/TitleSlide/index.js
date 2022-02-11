import React from 'react'
import { Fragment } from 'react-is'
import css from './TitleSlide.module.css'

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
