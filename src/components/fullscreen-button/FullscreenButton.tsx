import React from 'react'
import PropTypes from 'prop-types'

import styles from './FullscreenButton.module.scss'

type Props = {
  setFullscreen: (fullscreen: boolean) => void
}

export const FullscreenButton = ({setFullscreen}: Props) => {
  return (
    <div
      className={styles.fullScreen}
      onClick={() => setFullscreen(true)}
    >
      <span className={styles.fullScreenIcon}>
        <span></span>
        <span></span>
      </span>
      <span className={styles.fullScreenText}>full screen</span>
    </div>
  )
}