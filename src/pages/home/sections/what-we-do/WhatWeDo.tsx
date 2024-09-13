import React from 'react';
import { Caption, Section, Row, Column } from '../../../../components/ui';
import { CategoryCard } from './category-card';

type Props = {
    teasers: {
      virtual_tours_teaser: string,
      virtual_tours_poster: {
        guid: string,
      },
      animations_teaser: string,
      animations_poster: {
        guid: string,
      },
      visualizations_teaser: string,
      visualizations_poster: {
        guid: string,
      },
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
                categoryVideo={teasers.virtual_tours_poster.guid}
              />
              <CategoryCard
                categoryName='Animations'
                categoryTeaser={teasers.animations_teaser}
                categoryVideo={teasers.animations_poster.guid}
              />
              <CategoryCard
                categoryName='Visualizations'
                categoryTeaser={teasers.visualizations_teaser}
                categoryVideo={teasers.visualizations_poster.guid}
              />
          </Column>
        </Row>
      </Section>
    </>
  )
}
