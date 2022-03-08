import React from 'react'
import { Section } from '../../atoms'
import { PanelSection } from './'

export default {
  title: 'Organism/Panel Section',
  component: PanelSection
}

export const PanelDefault = () => (
  <PanelSection>
    <Section>
      <p>hola primero</p>
    </Section>
  </PanelSection>
)
export const PanelSections = () => (
  <PanelSection
    tabs={[
      { label: '1', id: '1' },
      { label: '2', id: '2' }
    ]}
  >
    <Section label='1'>
      <p>hola primero</p>
      <button>A</button>
      <button>A</button>
      <button>A</button>
      <button>A</button>
    </Section>
    <Section label='2'>
      <p>hola segundo</p>
    </Section>
  </PanelSection>
)
