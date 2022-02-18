import React, { Fragment } from 'react'
import downRight from '../../../static/suaInferior.svg'
import upRight from '../../../static/suaSuperior.svg'
import { Button } from '../Button'
import css from './Inicio.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Invoca una porción de la página inicial con el botón de inicio.
 * param { title, subTitle }
 * - title: rebice un título para la pagina inicial.
 * - subTitle: rebice un subtítulo para la pagina inicial.
 * - addClass: para ingresar clases adicionales.
 **/
export const Inicio = ({
  title = 'Nombre del Ova',
  subTitle = 'Nombre del curso',
  addClass
}) => {
  return (
    <Fragment>
      <section className={css.styleInit}>
        <div className={css.imgUpRight}>
          <img src={upRight} alt='Imagen sua superior derecha' />
        </div>
        <article className={css.container}>
          <div className={css.styleTitle}>
            <h3>{title}</h3>
          </div>
          <div className={css.styleSubTitle}>
            <h4>{subTitle}</h4>
          </div>
          <Button
            label='Iniciar'
            hasAriaLabel={false}
            addClass={css.styleBtn}
            onClick={() => console.log('accion del btn')}
            tabindex={0}
          />
        </article>
        <div className={css.imgDownRight}>
          <img src={downRight} alt='Imagen sua superior izquierda' />
        </div>
      </section>
    </Fragment>
  )
}
