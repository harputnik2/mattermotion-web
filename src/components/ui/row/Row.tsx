import React from 'react';
import cx from 'classnames';
import styles from './Row.module.scss';

type Props = {
    children: React.ReactNode,
    padding?: 'medium' | 'small',
    forceMobileColumns?: boolean,
};

export const Row = ({ children, padding, forceMobileColumns }: Props) => {
  return (
    <div className={
      cx(styles.row,
          { [styles.mediumPadding]: padding === 'medium' },
          { [styles.smallPadding]: padding === 'small' },
          { [styles.forceMobileColumns]: forceMobileColumns },
      )
    }>
      { children }
    </div>
  )
}