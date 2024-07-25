import React from 'react'
import styles from './FullscreenOverlay.module.scss'

type Props = {
  children: React.ReactNode,
  setFullscreen: (fullscreen: boolean) => void,
}

export const FullscreenOverlay = ({children, setFullscreen}: Props) => {
  return (
    <div className={styles.fullscreenOverlay}>
      <div className={styles.exitFullScreenHolder}>
        <span
          className={styles.exitFullScreen}
          onClick={() => setFullscreen(false)}
        >
          <span className={styles.fullScreenIcon}>
            <span></span>
            <span></span>
          </span>
          <span className={styles.fullScreenText}>exit full screen</span>
        </span>
      </div>
      { children }
    </div>
  )
}