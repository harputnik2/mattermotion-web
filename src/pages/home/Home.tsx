import React from 'react';
import { Hero, About, WhatWeDo, Contact } from './sections';
import styles from './Home.module.scss';
import {useQueryHomepage} from '../../api/homepage';

export const Home = () => {
  const { data, isLoading } = useQueryHomepage();

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const homepageData = data[0];
  const {about_part_1, about_part_2, virtual_tours_teaser, animations_teaser, visualizations_teaser} = homepageData;
  const teasers = {virtual_tours_teaser, animations_teaser, visualizations_teaser};

  return (
    <div className={styles.home}>
        <Hero />
        <About about_part_1={about_part_1} about_part_2={about_part_2} />
        <WhatWeDo teasers={teasers} />
        <Contact />
    </div>
  )
}
