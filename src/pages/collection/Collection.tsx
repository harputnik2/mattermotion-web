import React from 'react'
import {CollectionCard} from '../../components/collection-card'
import { Row, Column } from '../../components/ui'
import styles from './Collection.module.scss'
import {useQueryVisualizations} from '../../api/visualizations';
import {CategoryType} from '../../type';
import {ArtPiece} from '../../type/artpiece';

type Props = {
    category: CategoryType;
    collection: ArtPiece[];
}
export const Collection = ({category, collection}: Props) => {

  return (
    <>
      <div className={styles.collectionPage}>
        <h4 className={styles.collectionPageHeader}>
          {category.replace(/([A-Z])/g, ' $1')}
        </h4>
        <Row padding='small' forceMobileColumns={true}>
          {collection.map((artpiece: ArtPiece) => (
            <Column key={artpiece.id} padding='small' rowLimit={3}>
              <CollectionCard
                id={artpiece.id}
                title={artpiece.item_name}
                description={artpiece.description}
                image={artpiece.poster.guid}
                category={category}
              />
            </Column>
          ))}
        </Row>
      </div>
    </>
  )
}