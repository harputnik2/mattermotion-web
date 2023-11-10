import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CategoryCard.module.scss'

type Props = {
    categoryName: string,
    categoryTeaser: string,
    categoryVideo: string,
}
export const CategoryCard = ({
  categoryName,
  categoryTeaser,
  categoryVideo,
}: Props) => {
  return (
    <div className={styles.categoryLinkHolder}>
      <Link to={categoryName.toLowerCase().replace(' ', '-')} >
        <div className={styles.categoryLinkElements}>
          <div className={styles.graphicHolder}>
            <div className={styles.graphic}>
              <video muted={true} autoPlay={true} loop>
                <source src={categoryVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className={styles.title}>
            <h3>{categoryName}</h3>
            <figure className={styles.linkArrow}>
              <span />
              <span />
            </figure>
          </div>
          <div className={styles.description}>
            <p>{categoryTeaser}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}