import styles from './Artpiece.module.scss';
import React, {ReactElement} from 'react';

type Props = {
    title: string;
    description: string;
    children: ReactElement;

}

export const Artpiece = ({title, description, children}: Props) => {
  return (
    <div className={styles.artpiecePage}>
      <div className={styles.artpieceDetails}>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className={styles.artpiecePreview}>
        <div className={styles.artpiecePreviewInner}>
          {children}
        </div>
      </div>
    </div>
  )
}