import React from 'react'
import { Tooltip } from './'
import {Button} from '../../atoms'

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,

}

// const template = (args) => <Tooltip {...args} />

export const TooltipDefault = () => (
    <Tooltip label="holis">
        <Button styled='secondary' label="Secondary button">
        </Button>
    </Tooltip>
)
