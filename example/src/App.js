import React from 'react'
import { AsideNav, Button, Card, InputAction, InputControl, InputField, Modal, PanelTabs, Select, Textarea } from 'ui-components'
import 'ui-components/dist/index.css'
import css from './index.module.css'


const App = () => {
  return(
    <div className={css.main}>
      <div className={css.item}>
        <h1 className={css.title}>Buttons</h1>
        <div className={css.content}>
          <Button />
          <Button styled='secondary' label="Secondary button" icon='account_balance_wallet'/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Field</h1>
        <div className={css.content}>
          <InputField label="Nombre" type="text"/>
          <InputField label="Edad" type="number"/>
          <InputField label="Password" type="password"/>
          <InputField label="email" type="email"/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Checkbox</h1>
        <div className={css.content}>
          <InputControl label="check 1"  type="checkbox"/>
          <InputControl label="check 2"  type="checkbox" />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Radio</h1>
        <div className={css.content}>
          <InputControl label="radio 1"  type="radio" name="name_1"/>
          <InputControl label="radio 2"  type="radio" name="name_1"/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Special</h1>
        <div className={css.content}>
          <InputControl label="Toggle"  type="toggle"name="name_1"/>
          <div>
            <InputAction icon="upload" label="Upload file" theme="secondary" type="file" />
          </div>
          <div>
            <InputAction icon="color" label="Select color" theme="primary" type="color" />
          </div>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Select</h1>
        <div className={css.content}>
          <Select options={['name', 'value']} name="foo"></Select>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Panel Tabs</h1>
        <div className={css.content}>
          <PanelTabs></PanelTabs>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Modal</h1>
        <div className={css.content}>
          <Modal
            dataButton={{ label: 'Modal', styled: 'primary' }}
            title='Modal'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, tenetur pariatur a exercitationem ab cumque est necessitatibus fuga tempore ipsum vitae dolores impedit quae!' />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Side nav</h1>
        <div className={css.content}>
          <AsideNav
            dataButton={{ label: 'Side nav', styled: 'primary' }}
            content={{ title: 'Aside Nav', list: ['List 1', 'List 2', 'List3']}}/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card Basic</h1>
        <div className={css.content}>
          <Card content={{ title: 'Card Title', text: 'Secondary Text' }}/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card Image</h1>
        <div className={css.content}>
          <Card
            image={{ state: true, url: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg', alt: 'image' }}
            content={{ title: 'Card Title', text: 'Secondary Text' }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card with Image and Text</h1>
        <div className={css.content}>
          <Card
            image={{ state: true, url: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg', alt: 'image' }}
            content={{ title: 'Card Title', text: 'Secondary Text' }}
            supportingText= 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Card with Image, Text and action</h1>
        <div className={css.content}>
          <Card
            image={{ state: true, url: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg', alt: 'image' }}
            content={{ title: 'Card Title', text: 'Secondary Text' }}
            supportingText= 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
            buttons={{ state: true, first: { label: 'Action 1', theme: 'primary' }, secundary: { label: 'Action 2', theme: 'primary' } }}
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Textarea</h1>
        <div className={css.content}>
          <Textarea
            placeholder="Escribe aquí"
            rows="10"
            >
          </Textarea>
        </div>
      </div>
    </div>
    )
}

export default App
