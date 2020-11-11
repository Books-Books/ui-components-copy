import React from 'react'

import { Button,  InputField, InputControl } from 'ui-components'
import 'ui-components/dist/index.css'

const App = () => {
  return(
    <>
      <Button theme='primary' label="Primary Button" icon={{nameIcon:'accessibility'}}/>
      <Button theme='secondary' label="Secondary button" icon={{nameIcon:'account_balance_wallet', reverse: true}}/>
      <InputField theme="primary"  label="Nombre" type="text"/>
      <InputField theme="primary"  label="Edad" type="number"/>
      <InputControl  type="checkbox" theme="primary" />
      <InputControl  type="checkbox" theme="secondary" />
      <InputControl  type="radio" theme="secondary" name="name_1"/>
      <InputControl  type="radio" theme="secondary" name="name_1"/>
      <InputControl  type="toggle" theme="primary" name="name_1"/>
    </>
    )
}

export default App
