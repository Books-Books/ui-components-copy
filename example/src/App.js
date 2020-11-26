import React from 'react'
import { Accordion, AsideNav, Button, Card, Carrousel, Col, InputAction, InputControl, InputField, Modal, PanelTabs, Row, Select, TabPanel, Textarea, Tooltip } from 'ui-components'
import 'ui-components/dist/index.css'
import css from './index.module.css'


const App = () => {
  // console.log(Dropable)
  return(
    <div className={css.main}>
      <div className={css.item}>
        <h1 className={css.title}>Buttons</h1>
        <div className={css.content}>
          <Button label="Button"/>
          <Button label="Disabled" disabled/>
          <Button styled='secondary' label="Secondary button" icon='account_balance_wallet'/>
          <Button styled='secondary-outline' label="Secondary outline"/>
          <Button styled='primary-outline' label="Prymary outline" icon='account_balance_wallet'/>
          <Button styled='primary-outline' label="Outline disabled" icon='account_balance_wallet' disabled/>
          <Button styled='primary-icon' icon='account_balance_wallet'/>
          <Button styled='secondary-icon-outline' icon='favorite'/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Field</h1>
        <div className={css.content}>
          <InputField label="Nombre" type="text"/>
          <InputField label="Edad" type="number"/>
          <InputField label="Password" type="password"/>
          <InputField label="email" type="email"/>
          <InputField label="Disabled" type="text" disabled/>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Checkbox</h1>
        <div className={css.content}>
          <InputControl label="Check 1"  type="checkbox"/>
          <InputControl label="Check 2"  type="checkbox" />
          <InputControl label="Disabled"  type="checkbox" disabled />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Radio</h1>
        <div className={css.content}>
          <InputControl label="Radio 1"  type="radio" name="name_1"/>
          <InputControl label="Radio 2"  type="radio" name="name_1"/>
          <InputControl label="Disabled"  type="radio" name="name_1" disabled />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Input Special</h1>
        <div className={css.content}>
          <InputControl label="Toggle"  type="toggle"name="name_1"/>
          <InputControl label="Toggle disabled"  type="toggle"name="name_1" disabled/>
          <div>
            <InputAction icon="upload" label="Upload file" styled="secondary" type="file"/>
          </div>
          <div>
            <InputAction icon="palette" label="Select color" theme="primary" type="color"/>
          </div>
          <div>
            <InputAction icon="upload" label="Upload file" styled="secondary" type="file" disabled/>
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
        <h1 className={css.title}>Dropable</h1>
        <div className={css.content}>
          <Accordion
            width="300px"
            content={
              [
                {
                  title: 'Example 1',
                  text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
                  dataIcon: 'filter_drama'
                },
                {
                  title: 'Example 2',
                  text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
                  dataIcon: 'place'
                },
                {
                  title: 'Example 3',
                  text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, porro, ad nihil esse nemo eum, ',
                  dataIcon: 'whatshot'
                }
              ]
            }
          />
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Textarea</h1>
        <div className={css.content}>
            <Textarea
              placeholder="Escribe aquí..."
              rows="10"
            >

            </Textarea>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Textarea count</h1>
        <div className={css.content}>
            <Textarea
              placeholder="Escribe aquí..."
              rows="10"
              maxWords="15"
            >

            </Textarea>
        </div>
      </div>
      <div className={css.item}>
        <h1 className={css.title}>Carrousel</h1>
        <div className={css.content}>
          <Carrousel>
              <TabPanel>
                <Card
                  image={{
                    state: true,
                    url:
                      'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
                    alt: 'image'
                  }}
                  content={{ title: 'Card 1', text: 'Secondary Text' }}
                />
              </TabPanel>
              <TabPanel>
                <Card
                  image={{
                    state: true,
                    url:
                      'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
                    alt: 'image'
                  }}
                  content={{ title: 'Card 2', text: 'Secondary Text' }}
                />
              </TabPanel>
              <TabPanel>
                <Card
                  image={{
                    state: true,
                    url:
                      'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
                    alt: 'image'
                  }}
                  content={{ title: 'Card 3', text: 'Secondary Text' }}
                />
              </TabPanel>
              <TabPanel>
                <Card
                  image={{
                    state: true,
                    url:
                      'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
                    alt: 'image'
                  }}
                  content={{ title: 'Card 4', text: 'Secondary Text' }}
                />
              </TabPanel>
              <TabPanel>
                <Card
                  image={{
                    state: true,
                    url:
                      'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
                    alt: 'image'
                  }}
                  content={{ title: 'Card 5', text: 'Secondary Text' }}
                />
              </TabPanel>
              <TabPanel>
                <Card
                  image={{
                    state: true,
                    url:
                      'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
                    alt: 'image'
                  }}
                  content={{ title: 'Card 6', text: 'Secondary Text' }}
                />
              </TabPanel>
            </Carrousel>
          </div>
        </div>
      <div className={css.item}>
        <h1 className={css.title}>Tooltip</h1>
        <div className={css.content}>
        <Tooltip label="Primary">
          <Button styled='primary' label="Button">
          </Button>
        </Tooltip>
        <Tooltip label="Secondary">
          <Button styled='secondary' label="Button">
          </Button>
        </Tooltip>
        </div>
      </div>
      <div className={[css.item, css.full].join(' ')}>
        <Row flex='true' align-items='center' justify-content='center'>
          <Col xs='12' sm='6' md='3'></Col>
          <Col xs='12' sm='6' md='3'></Col>
          <Col xs='12' sm='6' md='3'></Col>
          <Col xs='12' sm='6' md='3'></Col>
        </Row>
      </div>
    </div>
    )
}

export default App
