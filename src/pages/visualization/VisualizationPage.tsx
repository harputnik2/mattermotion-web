import React from 'react'
import {useLocation} from 'react-router-dom';
import {useQueryVisualization} from '../../api/visualizations';
import {Visualization} from '../../components/artpiece-type';
import {Loader} from '../../components/loader';

export const VisualizationPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  const { data: visualization, isLoading } = useQueryVisualization(id);

  return !isLoading && visualization ? (
    <Visualization visualization={visualization} />
  ) : <Loader />
}