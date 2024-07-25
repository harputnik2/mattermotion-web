import React from 'react';
import { Caption, Section, Row, Column } from '../../../../components/ui';
import { CategoryCard } from './category-card';

type Props = {
    teasers: {
        virtual_tours_teaser: string,
        animations_teaser: string,
        visualizations_teaser: string,
    }
}

export const WhatWeDo = ({teasers}: Props) => {

  return (
    <>
      <div id='whatwedo' />
      <Section>
        <Row>
          <Column>
            <Caption content='what I do' />
              <CategoryCard
                categoryName='Virtual Tours'
                categoryTeaser={teasers.virtual_tours_teaser}
                categoryVideo={''}
              />
              <CategoryCard
                categoryName='Animations'
                categoryTeaser={teasers.animations_teaser}
                categoryVideo={''}
              />
              <CategoryCard
                categoryName='Visualizations'
                categoryTeaser={teasers.visualizations_teaser}
                categoryVideo={''}
              />
          </Column>
        </Row>
      </Section>
    </>
  )
}
