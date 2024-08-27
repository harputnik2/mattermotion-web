import React from 'react'
import PropTypes from 'prop-types'

import {CollectionCard} from '../../components/collection-card'
import { Row, Column } from '../../components/ui'
import {data, DataTypeKeys} from './data';
import styles from './Collection.module.scss'
import {useQueryHomepage} from '../../api/homepage';
import {useQueryVisualizations} from '../../api/visualizations';

type Props = {
    category: string;
}
export const Collection = ({category}: Props) => {

  const { data: visualizationsData, isLoading } = useQueryVisualizations();

  // if (!data || !Array.isArray(data) || data.length === 0) {
  //   return <div>No data available</div>;
  // }
  //
  // const visualizations = visualizationsData[0];
  // const {visualization_name, visualization_description, visualization_image} = visualizationsData;

  console.log(visualizationsData);

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
