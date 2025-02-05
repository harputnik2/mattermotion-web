import React from 'react'
import { Button } from '../../../../components/ui'
import { useNavigate } from 'react-router-dom'

import styles from './Hero.module.scss'

type Props = {
  video: string
}

export const Hero = ({ video }: Props) => {
  const navigate = useNavigate()

  const scrollToWhatWeDo = () => {
    const section = document.getElementById('whatwedo')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <video muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroSlogan}>Matter Motion</h1>
        <div className={styles.heroButtons}>
          <Button content="see what I do" onClick={scrollToWhatWeDo} />
          <Button content="contact me" onClick={() => navigate('/contact')} />
        </div>
      </div>
    </section>
  )
}
