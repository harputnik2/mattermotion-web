import React from 'react'
import {useQueryVisualizations} from '../../api/visualizations';
import {Category} from '../../type';
import {Collection} from '../../components/collection';
import {Loader} from '../../components/loader';

export const Visualizations = () => {

  const { data: collection, isLoading } = useQueryVisualizations();

  return isLoading ? (<Loader />) : (<Collection category={Category.VISUALIZATIONS} collection={collection} />);
}