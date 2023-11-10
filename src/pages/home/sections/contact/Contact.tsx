import React from 'react';
import { Caption, Section, Row, Column, Button } from '../../../../components/ui';

import styles from './Contact.module.scss'

export const Contact = () => {

  return (
    <>
      <div id='contact' />
      <Section theme='dark'>
        <Row>
          <Column>
            <Caption content='contact me' onDark={true} />
            <div className={styles.contactDetails}>
              <p className={styles.contactLabel}>
                email
              </p>
              <h4>
                Contact
              </h4>
            </div>
          </Column>
          <Column>
            <Caption content='leave a message' onDark={true} />
            <form
              action='https://formsubmit.co/5f5295a4e46d66df3c22df983d1294b9'
              method='POST'
              className={styles.form}
            >
              <div className={styles.labeledField}>
                <input type='text' name='name' required />
                <label htmlFor='name'>Name:</label>
              </div>
              <div className={styles.labeledField}>
                <input type='email' name='email' required />
                <label htmlFor='email'>Email:</label>
              </div>
              <div className={styles.labeledField}>
                <textarea name='message' required />
                <label htmlFor='message'>Message:</label>
              </div>
              <div className={styles.formButton}>
                <Button
                  content='send message'
                />
              </div>
            </form>
          </Column>
        </Row>
      </Section>
    </>
  )
}
