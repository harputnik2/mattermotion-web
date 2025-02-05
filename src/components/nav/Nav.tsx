import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import cx from 'classnames'

import styles from './Nav.module.scss'

type Props = {
  color: string,
  orientation: string,
  setMenuVisible?: Function,
}

export default function Nav({ color, orientation, setMenuVisible }: Props) {
  const location = useLocation()
  const currentLocation = location.pathname

  const links = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Animations',
      to: '/animations',
    },
    {
      title: 'Virtual Tours',
      to: '/virtual-tours',
    },
    {
      title: 'Visualizations',
      to: '/visualizations',
    },
    {
      title: 'Contact',
      to: '/contact',
    },
  ]

  return (
    <nav
      className={
        cx(styles.nav,
            { [styles.vertical]: orientation === 'vertical' },
            { [styles.horizontal]: orientation === 'horizontal' },
            { [styles.white]: color === 'white' },
        )
      }
    >
      {links.map((link, index) => {
        const isCurrentAndIsNotHome = currentLocation.startsWith(link.to) && link.to !== '/'
        return (
          <Link
            key={index}
            className={
              cx(styles.navItem,
                  { [styles.active]: currentLocation === link.to || isCurrentAndIsNotHome },
              )
            }
            to={link.to}
            onClick={setMenuVisible ? () => setMenuVisible(false) : undefined}
          >
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}

Nav.propTypes = {
  color: PropTypes.string,
  orientation: PropTypes.string,
  setMenuVisible: PropTypes.func,
}
