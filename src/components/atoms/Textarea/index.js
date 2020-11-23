import PropTypes from 'prop-types'
import React from 'react'
import css from './Textarea.module.css'

export const Textarea = ({placeholder, rows}) => {
    return(
        <textarea
            className={css.TextareaCont}
            rows={rows}
            placeholder={placeholder}
        ></textarea>
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    rows: PropTypes.string.isRequired
  }

Textarea.defaultProps = {
    placeholder: 'Escribe algo...',
    rows: '10'
}