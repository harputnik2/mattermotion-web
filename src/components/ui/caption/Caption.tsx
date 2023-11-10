import React from 'react'
import cx from 'classnames';
import styles from './Caption.module.scss';

type Props = {
    content: string;
    onDark?: boolean;
}

export const Caption = ({ content, onDark }: Props) => {
  return (
    <h2
      className={
        cx(styles.caption,
            { [styles.onDark]: onDark })
      }
    >
      { content }
    </h2>
  )
}