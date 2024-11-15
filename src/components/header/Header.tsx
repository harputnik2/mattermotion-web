import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav'
import cx from 'classnames'

import logo from '../../static/logo_icon.svg'
import styles from './Header.module.scss'

type Props = {
  homepage: boolean
}

export default function Header({homepage}: Props) {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className={ cx(styles.header, { [styles.homeHeader]: homepage }) }>
      <Link to='/' className={styles.logo}>
        <img src={logo} alt='logo' />
      </Link>
      <div className={styles.desktopNav}>
        <Nav orientation='horizontal' color={homepage ? 'white' : 'black'} />
      </div>
      <div className={styles.mobileNav}>
        <span
          className={styles.mobileMenuOn}
          onClick={() => setMenuVisible(true)}
        >
          menu
        </span>
        <div className={ cx(
            styles.mobileMenuHolder,
            { [styles.mobileMenuVisible]: menuVisible },
        )}>
          <div className={styles.mobileMenuHeader}>
            <img src={logo} className={styles.mobileMenuLogo}  alt='logo' />
            <span
              className={styles.mobileMenuOff}
              onClick={() => setMenuVisible(false)}
            >
              close menu
            </span>
          </div>
          <div className={styles.mobileNavHolder}>
            <Nav
              orientation='vertical'
              color='white'
              setMenuVisible={setMenuVisible}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
