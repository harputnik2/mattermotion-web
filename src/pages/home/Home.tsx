import React from 'react';
import { Hero, About, WhatWeDo, Contact } from './sections';
import styles from './Home.module.scss';
import {useQueryHomepage} from '../../api/homepage';
import {Loader} from '../../components/loader';

export const Home = () => {
  const { data, isLoading } = useQueryHomepage();

  if (isLoading || !data || !Array.isArray(data) || data.length === 0) {
    return <Loader />;
  }

  const homepageData = data[0];

  const {
    homepage_background_video,
    about_part_1,
    about_part_2,
    virtual_tours_teaser,
    virtual_tours_poster,
    animations_teaser,
    animations_poster,
    visualizations_teaser,
    visualizations_poster,
  } = homepageData;

  const teasers = {
    virtual_tours_teaser,
    virtual_tours_poster,
    animations_teaser,
    animations_poster,
    visualizations_teaser,
    visualizations_poster,
  };

  return (
    <div className={styles.home}>
        <Hero video={homepage_background_video.guid} />
        <About about_part_1={about_part_1} about_part_2={about_part_2} />
        <WhatWeDo teasers={teasers} />
        <Contact />
    </div>
  )
}
