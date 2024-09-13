import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider';
import {Artpiece} from '../../artpiece';

type Props = {
  visualization: {
    item_name: string,
    description: string,
    images: {guid: string}[]
  }
}
export const Visualization = ({visualization}: Props) => {
  const {item_name, description, images} = visualization;
  const imagesToDisplay = images.map((image: {guid: string}) => (image.guid));
  const viewportWidth = window.innerWidth;

  const width = viewportWidth >= 1200 ? viewportWidth*0.8 : viewportWidth;
  const height = width*2/3;
  return (
    <Artpiece title={item_name} description={description}>
      <SimpleImageSlider
        width={width}
        height={height}
        images={imagesToDisplay}
        showBullets={true}
        showNavs={true}
      />
    </Artpiece>
  )
}