import React from 'react'

import styles from './Review.module.scss'

type Props = {
    author: string,
    position: string,
    content: string,
    logo: string,
}
export const Review = ({
  author,
  position,
  content,
  logo,
}: Props) => {
  return (
    <div className={styles.review}>
      <span className={styles.symbol}></span>
      <p className={styles.content}>
        {content}
      </p>
      <span className={styles.author}>
        {author}
      </span>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
    </div>
  )
}