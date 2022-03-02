import React from 'react'
import css from './Row.module.css'

export const Row = ({ addClass = '' }) => {
  return <div className={`${css.row} ${addClass}`} />
}
