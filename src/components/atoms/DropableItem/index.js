import React, { Fragment } from 'react'
import { Icon } from '../icon/index'
import PropTypes from 'prop-types'
import css from './DropableItem.module.css'

export function DropableItem({ item, index, ...props }) {
  return (
    <Fragment>
      <div
        className={css['c-collapsible-container-header']}
        data-element={`body${index}`}
        {...props}
      >
        <Icon nameIcon={item.dataIcon} />
        <p> {item.title}</p>
      </div>
      <div className={css['c-collapsible-container-body']} id={`body${index}`}>
        <p>{item.text}</p>
      </div>
    </Fragment>
  )
}

DropableItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
}
