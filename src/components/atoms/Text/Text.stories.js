// import React, { Fragment } from 'react'
// import { Text } from '.'

// export default {
//   title: 'Atoms/Text',
//   component: Text
// }

// const template = (args) => <Text {...args} />

// export const TextDefault = template.bind({})
// TextDefault.args = {
//   type: 'h1',
//   children: (
//     <Fragment>
//       <b>Lorem</b> ipsum dolor sit.
//     </Fragment>
//   )
// }

import { storiesOf } from '@storybook/react'
import React from 'react'
import { Text } from '.'

storiesOf('Atoms/Text', module).add('Texts', () => <Text />)
