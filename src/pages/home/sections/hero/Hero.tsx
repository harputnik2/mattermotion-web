import React from 'react'
import { Button } from '../../../../components/ui';

import styles from './Hero.module.scss'

type Props = {
  video: string
}

export const Hero = ({video}: Props) => {

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video muted={true} autoPlay={true} loop>
            <source
              src={video}
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroSlogan}>Matter Motion</h1>
          <div className={styles.heroButtons}>
              <Button content='see what I do' />
              <Button content='contact me' />
          </div>
        </div>
      </section>
    </>
  )
}
