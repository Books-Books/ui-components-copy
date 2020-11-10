import React from 'react'

import { Button } from 'ui-components'
import 'ui-components/dist/index.css'

const App = () => {
  return(
    <>
      <Button theme='primary' label="Primary Button" icon={{nameIcon:'delete'}}/>
      <Button theme='secondary' label="Secondary button" icon={{nameIcon:'edit', reverse: true}}/>
    </>
    )
}

export default App
