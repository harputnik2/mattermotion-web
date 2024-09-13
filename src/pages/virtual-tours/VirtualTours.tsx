import React from 'react'
import {Category} from '../../type';
import {Collection} from '../../components/collection';
import {useQueryVirtualTours} from '../../api/virtualTours';
import {Loader} from '../../components/loader';

export const VirtualTours = () => {

  const { data: collection, isLoading } = useQueryVirtualTours();

  return isLoading ? (<Loader />) : (<Collection category={Category.VIRTUAL_TOURS} collection={collection} />);
}