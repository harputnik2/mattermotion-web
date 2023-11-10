import React from 'react'
import { Button } from '../../../../components/ui/button';

import styles from './Hero.module.scss'

export const Hero = () => {

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video muted={true} autoPlay={true} loop>
            <source
              src='fake'
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
