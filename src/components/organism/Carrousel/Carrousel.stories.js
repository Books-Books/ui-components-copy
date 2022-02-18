import React from 'react'
import { TabPanel } from '../../atoms'
import { Card } from '../../molecules'
import { Carrousel } from './'

export default {
  title: 'Organism/Carrousel',
  componenet: Carrousel
}

// const Template = (args) => <Carrousel {...args} />

export const CarrouselDefault = () => (
  <Carrousel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Titulo 1', text: 'Texto secundario' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Título 2', text: 'Texto secundario' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Título 3', text: 'Texto secundario' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Título 4', text: 'Texto secundario' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?cs=srgb&dl=pexels-pixabay-290470.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Título 5', text: 'Texto secundario' }}
      />
    </TabPanel>
    <TabPanel>
      <Card
        width='350px'
        image={{
          state: true,
          url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg',
          alt: 'image'
        }}
        content={{ title: 'Título 6', text: 'Texto secundario' }}
      />
    </TabPanel>
  </Carrousel>
)
