import React from 'react'
import {useQueryVisualizations} from '../../api/visualizations';
import {Category} from '../../type';
import {Collection} from '../collection';

export const Animations = () => {

  const { data: collection, isLoading } = useQueryVisualizations();

  return isLoading ? (<p>is loading</p>) : (<Collection category={Category.ANIMATIONS} collection={collection} />);
}