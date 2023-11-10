import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

type Props = {
    content: string,
    color?: string,
}
export const Button = ({ content, color }: Props) => {
  return (
    <button className={
      cx(styles.button,
          { [styles.darkButton]: color === 'dark' },
      )
    }
    >
      <span>
        { content }
      </span>
    </button>
  )
}