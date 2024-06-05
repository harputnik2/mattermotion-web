import React from 'react'
import PropTypes from 'prop-types'

import CollectionCard from '../../components/collection-card'
import { Row, Column } from '../../components/ui'
import {data, DataTypeKeys} from './data';
import styles from './Collection.module.scss'

type Props = {
    category: string;
}
export default function Collection({category}: Props) {

    console.log(category);

  return (
    <>
      <div className={styles.collectionPage}>
        <h4 className={styles.collectionPageHeader}>
          {category.replace(/([A-Z])/g, ' $1')}
        </h4>
        <Row padding='small' forceMobileColumns={true}>
          {data[category as DataTypeKeys].slice(0).reverse().map((artpiece: any) => (
            <Column key={artpiece.id} padding='small' rowLimit={3}>
              <CollectionCard
                id={artpiece.id}
                title={artpiece.name}
                description={artpiece.description}
                image={
                  artpiece.image ? artpiece.image.url : artpiece.poster.url
                }
                category={category}
              />
            </Column>
          ))}
        </Row>
      </div>
    </>
  )
}

Collection.propTypes = {
  category: PropTypes.string,
}
