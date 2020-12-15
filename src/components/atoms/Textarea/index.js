import PropTypes from 'prop-types'
import React, { useState } from 'react'
import css from './Textarea.module.css'

export const Textarea = ({ placeholder, rows, maxWords, addClass }) => {
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
      <textarea
        className={css.TextareaItem}
        rows={rows}
        placeholder={placeholder}
        onKeyPress={HandleChange}
        maxLength={MaxLength}
      />
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
