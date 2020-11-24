import React from 'react'
import css from './Tooltip.module.css'

export const Tooltip = ({children, label}) => {
    return(
        <div className={css.TooltipCont}>
            {children}
            <div className={css.TooltipItem}>{label}</div>
        </div>
    )
}