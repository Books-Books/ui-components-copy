import React from 'react'
import css from './Col.module.css'

export const Col = ({ addClass = 'false' }) => {
  return <div className={`${css.col} ${addClass}`} />
}
