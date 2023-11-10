import React from 'react';
import { Caption, Section, Row, Column } from '../../../../components/ui';
import { CategoryCard } from './category-card';

const data = {
    homepage: {
        what_we_do: {
            category: [
                {
                    id: 1,
                    name: 'Web Development',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    animation: {
                        url: 'https://via.placeholder.com/150',
                    },
                },
                {
                    id: 2,
                    name: 'Web Design',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    animation: {
                        url: 'https://via.placeholder.com/150',
                    },
                },
                {
                    id: 3,
                    name: 'Mobile Development',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    animation: {
                        url: 'https://via.placeholder.com/150',
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
