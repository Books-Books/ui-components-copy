import React from 'react'
import css from './Col.module.css'

export const Col = ({ addClass = '', ...props }) => {
  return <div className={`${css['col']} ${addClass}`} {...props} />
}
