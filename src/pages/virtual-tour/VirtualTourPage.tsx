import React from 'react'
import {useLocation} from 'react-router-dom';
import {Loader} from '../../components/loader';
import {useQueryVirtualTour} from '../../api/virtualTours';
import {VirtualTour} from '../../components/artpiece-type/virtual-tour';

export const VirtualTourPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  const {data, isLoading} = useQueryVirtualTour(id);

  return !isLoading && data ? <VirtualTour tour={data.url} /> : <Loader />
}