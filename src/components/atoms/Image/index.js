import React, { Fragment } from 'react'
import css from './Image.module.css'

export const Image = ({
  url = `prueba`,
  alt = 'Imagen de prueba.',
  title = 'Imagen 1.',
  typeImg,
  addClass
}) => {
  const conditionImg = (url) => {
    if (url) {
      return require(`../../../images/${url}${typeImg}`)
    } else if (!url) {
      return require(`../../../images/default.png`)
    }
  }

  return (
    <Fragment>
      <figure className={css.containerImg}>
        <div className={css.square}></div>
        <img src={conditionImg(url)} alt={alt} />
      </figure>
      <div className={css.containerText}>
        <p tabIndex={0}>
          <span className={css.styleTitle}>{title}</span>
          <span className={css.styleText}>{alt}</span>
        </p>
      </div>
    </Fragment>
  )
}

Image.defaultProps = {
  typeImg: '.png'
}
