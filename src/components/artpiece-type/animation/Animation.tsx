import React from 'react'
import styles from './Animation.module.scss'
import {Artpiece} from '../../artpiece';

type Props = {
  animation: {
    item_name: string,
    description: string,
    poster: string,
    animation: {
      guid: string;
    }
  }
}
export const Animation = ({animation}: Props) => {
  const {item_name, description, poster} = animation;
  console.log(animation.animation);
  return (
    <Artpiece title={item_name} description={description}>
      <div className={styles.animation}>
        <video
          className={styles.video}
          muted={true}
          autoPlay
          loop
          poster={poster}
          preload="auto"
          controls
        >
          <source
            src={animation.animation.guid}
            type="video/mp4"
          />
        </video>
      </div>
    </Artpiece>
  )
}