import React from 'react'
import css from './Row.module.css'

export const Row = (props) => {
  return <div className={`${css.row} ${props.addClass}`} />
}
