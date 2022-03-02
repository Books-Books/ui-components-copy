import React from 'react'
import css from './Col.module.css'

export const Col = ({ addClass = '' }) => {
  return <div className={`${css.col} ${addClass}`} />
}
