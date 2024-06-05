import React from 'react';
import { Caption, Section, Row, Column } from '../../../../components/ui';
import { CategoryCard } from './category-card';

const data = {
    homepage: {
        what_we_do: {
            category: [
                {
                    id: 1,
                    name: 'Virtual Tours',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    animation: {
                        url: '/media/video/00086400low_V1-0005.mp4',
                    },
                },
                {
                    id: 2,
                    name: 'Animations',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    animation: {
                        url: '/media/video/00086400low_V1-0005.mp4',
                    },
                },
                {
                    id: 3,
                    name: 'Visualizations',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    animation: {
                        url: '/media/video/00086400low_V1-0005.mp4',
                    },
                }
            ]
        }
    }
}

export const WhatWeDo = () => {

  return (
    <>
      <div id='whatwedo' />
      <Section>
        <Row>
          <Column>
            <Caption content='what I do' />
            {data.homepage.what_we_do.category.map((category) => (
              <CategoryCard
                key={category.id}
                categoryName={category.name}
                categoryTeaser={category.description}
                categoryVideo={category.animation.url}
              />
            ))}
          </Column>
        </Row>
      </Section>
    </>
  )
}
