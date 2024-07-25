import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import {ArtpieceSwitcher} from '../../components/artpiece-switcher'
import styles from './Artpiece.module.scss'
import {CategoryType} from '../../type';
import FullscreenOverlay from '../../components/fullscreen-overlay';
import {VirtualTour, Visualization} from '../../components/artpiece-type';

type Props = {
  category: CategoryType,
}

export const Artpiece = ({category}: Props) => {
  const [fullscreen, setFullscreen] = useState(false)
  const { id } = useParams()

  // let ArtpieceComponent: Element | null;
  // ArtpieceComponent = category === 'visualization' ? (<Visualization id={id} />) : category === 'animations' ? (
  //   <Animations id={id} />) : category === 'virtual-tours' ? (<VirtualTour id={id} />) : null;


  return (
    <>
      <div className={styles.artpiecePage}>
        <div className={styles.artpieceDetails}>
          <h6>cdvfv</h6>
          <p>rtbrvb</p>
        </div>
        <div className={styles.artpiecePreview}>
          {/*  artpiece component  */}
        </div>
        {id && (
        <ArtpieceSwitcher category={category} id={id} />
        )}
        {/* <FullscreenButton setFullscreen={setFullscreen} /> */}
      </div>
      {fullscreen &&
        <FullscreenOverlay setFullscreen={setFullscreen}>
          {/*  artpiece component  */}
        </FullscreenOverlay>
      }
    </>
  )
}