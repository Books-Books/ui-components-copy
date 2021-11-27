import React, { useState } from 'react'
import { BtnSec } from '../../atoms'
import { AsideSection } from '../../molecules'
import css from './PanelSection.module.css'

const PanelSection = ({ children: childrenProp, tabs, ...others }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let childIndex = 0
  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null
    }
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value

    childIndex += 1
    return React.cloneElement(child, {
      index: childValue,
      value: value
    })
  })

  return (
    <div className={css.Section} {...others}>
      <AsideSection value={value} onChange={handleChange}>
        {tabs &&
          tabs.map((elem) => <BtnSec label={elem.label} key={elem.id} />)}
      </AsideSection>
      {children}
    </div>
  )
}

export { PanelSection }
