import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Column } from '../ui'
import Nav from '../nav'
import cx from 'classnames'

import logo from '../../static/logo_icon.svg'

import styles from './Footer.module.scss'

type Props = {
  homepage?: boolean
}

export default function Footer({homepage}: Props) {

  return (
    <div className={ cx(styles.footer, { [styles.homeFooter]: homepage }) }>
      <Row forceMobileColumns={true}>
        <Column rowLimit={3}>
          <div className={styles.logo}>
            <Link to='/' title='Logo'>
              <img src={logo} alt='Matter Motion' />
            </Link>
          </div>
        </Column>
        <Column rowLimit={3}>
          <Nav orientation='vertical' color='white' />
        </Column>
        <Column></Column>
      </Row>
    </div>
  )
}
