import React from 'react';
import { Caption, Section, Row, Column } from '../../../../components/ui';
import { Review } from './review';

const data = {
    homepage: {
        testimonials: {
            review: [
                {
                    id: 1,
                  author: 'John Doe',
                    position: 'CEO of Company',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    logo: {
                        url: 'https://via.placeholder.com/150',
                    },
                },
                {
                    id: 2,
                  author: 'John Doe 2',
                    position: 'CEO of Company 2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
                    logo: {
                        url: 'https://via.placeholder.com/150',
                    },
                }
            ]
        }
    }
}

export const Testimonials = () => {

  return (
    <>
      <Section theme='sectionAfterDark'>
        <Row>
          <Column>
            <Caption content='what others say about me' />
          </Column>
        </Row>
        <Row>
          {data.homepage.testimonials.review.map((review) => (
            <Column key={review.id}>
              <Review
                author={review.author}
                position={review.position}
                content={review.content}
                logo={review.logo.url}
              />
            </Column>
          ))}
        </Row>
      </Section>
    </>
  )
}
