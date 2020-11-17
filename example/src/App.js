import React from 'react'

import { Button,  InputField, InputControl, InputAction } from 'ui-components'
import 'ui-components/dist/index.css'

const App = () => {
  return(
    <>
      <Button styled='primary' label="Primary Button" icon='accessibility'/>
      <Button styled='secondary' label="Secondary button" icon='account_balance_wallet'/>
      <InputField label="Nombre" type="text"/>
      <InputField label="Edad" type="number"/>
      <InputField label="Password" type="password"/>
      <InputField label="email" type="email"/>
      <InputControl label="check 1"  type="checkbox"/>
      <InputControl label="check 2"  type="checkbox" />
      <InputControl label="check 1"  type="radio" name="name_1"/>
      <InputControl label="radio 1"  type="radio" name="name_1"/>
      <InputControl label="Toggle"  type="toggle"name="name_1"/>
      <InputAction icon="upload" label="Upload file" theme="secondary" type="file" />
      <InputAction icon="upload" label="Upload file" theme="primary" type="file" />
    </>
    )
}

export default App
