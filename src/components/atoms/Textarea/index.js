import PropTypes from 'prop-types'
import React, { useState } from 'react'
import css from './Textarea.module.css'

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un input de texto.
 * param { id, placeholder, label, isLabelVisible, rows, maxWords, addClass }
 * - id: identificador único del componente.
 * - placeholder: texto que aparecerá por default.
 * - label: etiqueta que describirá el elemento.
 * - isLabelVisible: determina si el label será visible visualmente (si es true) o no (si es false)
 * - rows: número de filas
 * - maxWords: número de palabras máximas en el textarea
 * - addClass: clase adicional que se necesite agregar al textarea
 **/

export const Textarea = ({
  id,
  placeholder,
  label,
  isLabelVisible = false,
  rows,
  maxWords,
  addClass
}) => {
  const [Count, SetCount] = useState(0)
  const [MaxLength, SetMaxLength] = useState(10000)

  function HandleChange({ target }) {
    const rgxWords = /\b[^\s\s.\-:;]*/
    const countWords =
      target.value === ''
        ? 0
        : target.value.split(rgxWords, Number(maxWords) + 1).length - 1
    if (countWords === Number(maxWords)) {
      SetMaxLength(target.value.length)
    }
    SetCount(countWords)
  }
  return (
    <div className={`${css.TextareaCont} ${addClass}`}>
      <label for={id}>
        <span className={isLabelVisible ? '' : 'sr-only'}>{label}</span>
        <textarea
          className={css.TextareaItem}
          rows={rows}
          placeholder={placeholder}
          onKeyPress={HandleChange}
          maxLength={MaxLength}
          id={id}
        />
      </label>
      {maxWords && (
        <span className={css.CountCont}> {`${Count} / ${maxWords}`} </span>
      )}
    </div>
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  maxWords: PropTypes.string,
  addClass: PropTypes.string
}

Textarea.defaultProps = {
  placeholder: 'Escribe algo...',
  rows: '10',
  addClass: ''
}
