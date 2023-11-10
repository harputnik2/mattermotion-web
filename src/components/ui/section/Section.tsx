import React from 'react';
import cx from 'classnames';
import styles from './Section.module.scss';

type Props = {
    children: React.ReactNode,
    theme?: 'dark' | 'sectionAfterDark',
};
export const Section = ({ children, theme }: Props) => {
  return (
    <section
      className={
        cx(styles.section,
            { [styles.darkSection]: theme === 'dark' },
            { [styles.sectionAfterDark]: theme === 'sectionAfterDark' },
        )
      }
    >
      <div className={styles.sectionContent}>
        { children }
      </div>
    </section>
  )
}