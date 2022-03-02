import React from 'react'
import css from './Col.module.css'

export const Cow = ({ addClass, ...props }) => {
  return <div className={`${css['col']} ${addClass}`} {...props} />
}
