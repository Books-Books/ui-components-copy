import React from 'react'

import { Button, Input } from 'ui-components'
import 'ui-components/dist/index.css'

const App = () => {
  return(
    <>
      <Button theme='primary' label="Primary Button" icon={{nameIcon:'accessibility'}}/>
      <Button theme='secondary' label="Secondary button" icon={{nameIcon:'account_balance_wallet', reverse: true}}/>
      <Input theme="primary"  label="I love Fresita" type="text"/>
    </>
    )
}

export default App
