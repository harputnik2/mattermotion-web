import { VISUALIZATION, ANIMATION, VIRTUAL_TOUR } from 'consts'
import { Visualization, Animation, VirtualTour } from 'components/artpiece-type'

import { categories } from 'consts'

const visualizationSettings = {
  artpieceQuery: VISUALIZATION,
  artpieceCategory: 'visualization',
  ArtpieceComponent: Visualization,
}

const animationSettings = {
  artpieceQuery: ANIMATION,
  artpieceCategory: 'animation',
  ArtpieceComponent: Animation,
}

const virtualTourSettings = {
  artpieceQuery: VIRTUAL_TOUR,
  artpieceCategory: 'virtualTour',
  ArtpieceComponent: VirtualTour,
}

export const settings = (category) => {
  return category === categories.VISUALIZATIONS ?
    visualizationSettings :
    category === categories.ANIMATIONS ?
      animationSettings :
      virtualTourSettings
}

export const propsSettings = (category, data) => {
  return category === categories.VISUALIZATIONS ? {
    visualization: data.visualization.image.url,
  } : category === categories.ANIMATIONS ? {
    poster: data.animation.poster.url,
    animation: data.animation.animation.url,
  } : {
    tour: data.virtualTour.tour_url,
  }
}
