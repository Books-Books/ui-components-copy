import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Icon } from '../icon/index'
import css from './DropableItem.module.css'

export function AccordionItem({ item, index, stateIcon, addClass, ...props }) {
  return (
    <Fragment>
      <button
        className={`${css['c-collapsible-container-header']} ${addClass}`}
        aria-expanded={false}
        // data-element={`body${index}`}
        {...props}
      >
        <Icon nameIcon={item.dataIcon} />
        <p> {item.title}</p>
        <Icon nameIcon={stateIcon} />
      </button>
      <div className={css['c-collapsible-container-body']} id={`body${index}`}>
        <p>{item.text}</p>
      </div>
    </Fragment>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.object,
  stateIcon: PropTypes.string,
  index: PropTypes.number,
  addClass: PropTypes.string
}

AccordionItem.defaultProps = {
  stateIcon: 'expand_more',
  addClass: ''
}
