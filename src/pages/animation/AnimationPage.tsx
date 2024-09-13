import React from 'react'
import {useLocation} from 'react-router-dom';
import {Loader} from '../../components/loader';
import {useQueryAnimation} from '../../api/animations';
import {Animation} from '../../components/artpiece-type';

export const AnimationPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  const { data: animation, isLoading } = useQueryAnimation(id);

  return !isLoading ? (
    <Animation animation={animation} />
  ) : <Loader />
}