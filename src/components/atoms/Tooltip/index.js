import React from 'react'
import css from './Tooltip.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un elemento que al poner el mouse o al hacer focus al botón interno, se mostrará a modo de descripción del elemento.
 * param { children, addClass, id, content }
 * - children: componente que se usará para activar el tooltip. DEBE SER UN BOTÓN.
 * - addClass: clase adicional que se le agregue al botón.
 * - id: id que relacionará el botón con el tooltip
 * - content: descripción que mostrará el tooltip
 **/

export const Tooltip = ({ children, addClass, id, content }) => {
  return (
    <div className={`${css.TooltipCont} ${addClass}`}>
      {children}
      <div role='tooltip' className={css.TooltipItem} id={id}>
        {content}
      </div>
    </div>
  )
}

// Tooltip.propTypes = {
//   addClass: PropTypes.string
// }

// Tooltip.defaultProps = {
//   addClass: ''
// }
