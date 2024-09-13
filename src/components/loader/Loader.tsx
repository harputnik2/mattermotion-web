import React from 'react'
import logo from '../../static/logo.gif'
import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderImg}>
        <img src={logo} alt='loader' />
      </div>
    </div>
  )
}
