import React from 'react'
import { Fragment } from 'react-is'
import css from './TitleSlide.module.css'

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
