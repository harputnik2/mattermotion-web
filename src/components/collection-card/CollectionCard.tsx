import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './CollectionCard.module.scss'

type Prop = {
  id: number,
  title: string,
  description: string,
  image: string,
  category: string,
}

export const CollectionCard = ({
  id,
  title,
  description,
  image,
  category,
}: Prop) => {
  const link = category === 'virtualTours' ?
    'virtual-tours' :
    category

  return (
    <Link to={`/${link}/${id}`} className={styles.collectionCardLink}>
      <div className={styles.collectionCard}>
        <div className={styles.cardIllustration}>
          <img src={image} alt='dom' />
        </div>
        <div className={styles.cardDetails}>
          <h6 className={styles.cardTitle}>{title}</h6>
          <p className={styles.cardDescription}>{description}</p>
          <figure className={styles.linkArrow}>
            <span />
            <span />
          </figure>
        </div>
      </div>
    </Link>
  )
}