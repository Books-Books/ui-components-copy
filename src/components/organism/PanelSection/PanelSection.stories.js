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
    <Section>
      <p>hola primero</p>
    </Section>
    <Section>
      <p>hola segundo</p>
    </Section>
  </PanelSection>
)
