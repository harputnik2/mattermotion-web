import React from 'react'

import { Caption, Section, Row, Column } from '../../../../components/ui';

export const About = () => {

  return (
    <>
      <Section>
        <Row>
          <Column>
            <Caption content='about me' />
            <p>about 1</p>
          </Column>
          <Column>
            <p>about 2</p>
          </Column>
        </Row>
      </Section>
    </>
  )
}
