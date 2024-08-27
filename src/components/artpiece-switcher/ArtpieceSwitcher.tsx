import React from 'react'
import { Link } from 'react-router-dom'

import {getPrevAndNextId} from './utils'

import styles from './ArtpieceSwitcher.module.scss'
import {CategoryType} from '../../type';

type Props = {
  category: CategoryType,
  id: string,
}

export const ArtpieceSwitcher = ({ category, id }: Props) => {
  const arpiecesIds = ['1', '2', '3', '4', '5']

  const nextPrevIds = arpiecesIds && getPrevAndNextId(arpiecesIds, id)

  return (
    <div className={styles.artpieceSwitcher}>
      {
        nextPrevIds && nextPrevIds.prevId !== id && (
          <>
            <Link to={`${nextPrevIds && nextPrevIds.prevId}`} >
              <div className={styles.prev}>
                <div className={styles.switchButton}>
                  <figure className={styles.circle}></figure>
                  <figure className={styles.arrow}></figure>
                </div>
                <span className={styles.action}>
                  PREVIOUS
                </span>
              </div>
            </Link>
            <Link to={`${nextPrevIds && nextPrevIds.nextId}`} >
              <div className={styles.next}>
                <div className={styles.switchButton}>
                  <figure className={styles.circle}></figure>
                  <figure className={styles.arrow}></figure>
                </div>
                <span className={styles.action}>
                  NEXT
                </span>
              </div>
            </Link>
          </>
        )
      }
    </div>
  )
}