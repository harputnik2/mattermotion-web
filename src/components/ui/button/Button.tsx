import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

type Props = {
    content: string,
    color?: string,
    onClick?: () => void,
}
export const Button = ({ content, color, onClick }: Props) => {
  return (
    <button onClick={onClick} className={
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