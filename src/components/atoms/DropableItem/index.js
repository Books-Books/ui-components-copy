import React, { Fragment } from 'react'
import { Icon } from '../icon/index'
import PropTypes from 'prop-types'
import css from './DropableItem.module.css'

export function AccordionItem({ item, index, stateIcon, ...props }) {
  return (
    <Fragment>
      <div
        className={css['c-collapsible-container-header']}
        // data-element={`body${index}`}
        {...props}
      >
        <Icon nameIcon={item.dataIcon} />
        <p> {item.title}</p>
        <Icon nameIcon={stateIcon} />
      </div>
      <div className={css['c-collapsible-container-body']} id={`body${index}`}>
        <p>{item.text}</p>
      </div>
    </Fragment>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.object,
  stateIcon: PropTypes.string,
  index: PropTypes.number
}

AccordionItem.defaultProps = {
  stateIcon: 'expand_more'
}
