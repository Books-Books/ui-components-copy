import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '../../atoms/icon'
import css from './TableGrid.module.css'

export function TableGrid({ headContent, bodyContent, gridColumn }) {
  console.log(bodyContent)
  return (
    <div className={`${css['c-scroll']} ui-scroll`}>
      <div className={`${css['c-gridTable']} ui-gridTable`}>
        <div
          className={`${css['c-gridTable-head']} ui-gridTable-head`}
          style={gridColumn}
        >
          {headContent.map((item, index) => (
            <div
              className={`${css['c-gridTable-head-item']} ui-gridTable-head-item`}
              key={`head-${index}`}
            >
              {item.type === 'icon' ? (
                <Icon nameIcon={item.label} addClass={item.addClass} />
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
        <div
          className={`${css['c-gridTable-body']} ui-gridTable-body`}
          style={gridColumn}
        >
          {bodyContent.map((data) =>
            data.map((buttom, index) => (
              <div
                className={`${css['c-gridTable-body-item']} ui-gridTable-body-item`}
                key={`body-${index}`}
              >
                {buttom}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

TableGrid.propTypes = {
  headContent: PropTypes.array,
  bodyContent: PropTypes.array
}

TableGrid.defaultProps = {
  headContent: [],
  bodyContent: []
}
