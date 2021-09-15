import React from 'react'
import css from './Col.module.css'

export const Col = ({ newClass, ...props }) => {
  return <div className={(css.col, newClass)} {...props} />
}
