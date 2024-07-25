import React from 'react'

import { Caption, Section, Row, Column } from '../../../../components/ui';


type Props = {
  about_part_1: string,
  about_part_2: string,
}

export const About = ({about_part_1, about_part_2}: Props) => {

  return (
    <>
      <Section>
        <Row>
          <Column>
            <Caption content='about me' />
            <p>{about_part_1}</p>
          </Column>
          <Column>
            <p>{about_part_2}</p>
          </Column>
        </Row>
      </Section>
    </>
  )
}
