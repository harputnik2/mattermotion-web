import React from 'react'
import {Category} from '../../type';
import {Collection} from '../../components/collection';
import {useQueryAnimations} from '../../api/animations';
import {Loader} from '../../components/loader';

export const Animations = () => {

  const { data: collection, isLoading } = useQueryAnimations();

  return isLoading ? (<Loader />) : (<Collection category={Category.ANIMATIONS} collection={collection} />);
}