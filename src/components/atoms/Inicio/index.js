import React, { Fragment } from 'react'
import { Button } from '../Button'
import css from './Inicio.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Invoca una porción de la página inicial con el botón de inicio.
 * param { title, subTitle, imgUp, imgDown, altUp, altDown, addClass }
 * - title: rebice un título para la pagina inicial.
 * - subTitle: rebice un subtítulo para la pagina inicial.
 * - imgUp: rebice la ruta de la img superior.
 * - imgDown: rebice la ruta de la img inferior.
 * - altUp: rebice el texto alt de la imagen superior.
 * - altDown: rebice el texto alt de la imagen superior.
 * - addClass: para ingresar clases adicionales.
 **/
export const Inicio = ({
  imgUp,
  imgDown,
  altUp,
  altDown,
  title = 'Nombre del Ova',
  subTitle = 'Nombre del curso',
  addClass
}) => {
  return (
    <Fragment>
      <section className={`${css.styleInit} ${addClass}`}>
        <div className={css.imgUpRight}>
          <img src={imgUp} alt={altUp} />
        </div>
        <article className={css.container}>
          <div className={css.styleTitle}>
            <h1>{title}</h1>
          </div>
          <div className={css.styleSubTitle}>
            <p>{subTitle}</p>
          </div>
          <Button
            label='Iniciar'
            hasAriaLabel={false}
            addClass={css.styleBtn}
            onClick={() => console.log('accion del btn')}
          />
        </article>
        <div className={css.imgDownRight}>
          <img src={imgDown} alt={altDown} />
        </div>
      </section>
    </Fragment>
  )
}
