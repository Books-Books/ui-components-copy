import React from 'react'

import { Button,  InputField, InputControl } from 'ui-components'
import 'ui-components/dist/index.css'

const App = () => {
  return(
    <>
      <Button theme='primary' label="Primary Button" icon={{nameIcon:'accessibility'}}/>
      <Button theme='secondary' label="Secondary button" icon={{nameIcon:'account_balance_wallet', reverse: true}}/>
      <InputField label="Nombre" type="text"/>
      <InputField label="Edad" type="number"/>
      <InputField label="Password" type="password"/>
      <InputField label="email" type="email"/>
      <InputControl label="check 1"  type="checkbox"/>
      <InputControl label="check 2"  type="checkbox" theme="secondary" />
      <InputControl label="check 1"  type="radio" theme="secondary" name="name_1"/>
      <InputControl label="radio 1"  type="radio" theme="secondary" name="name_1"/>
      <InputControl label="Toggle"  type="toggle"name="name_1"/>
    </>
    )
}

export default App
