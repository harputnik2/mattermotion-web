import React from 'react'

import cx from 'classnames'

import styles from './Column.module.scss'

type Props = {
    children: React.ReactNode,
    padding?: 'medium' | 'small',
    rowLimit?: 3,
}
export const Column = ({ children, padding, rowLimit }: Props) => {
  return (
    <div className={
      cx(styles.column,
          { [styles.mediumPadding]: padding === 'medium' },
          { [styles.smallPadding]: padding === 'small' },
          { [styles.threeInRow]: rowLimit === 3 },
      )
    }>
      { children }
    </div>
  )
}