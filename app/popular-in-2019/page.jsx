'use client';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectBestOfTheYearPage } from 'store/bestOfTheYear/selectors';
import { useGetPopularIn2019Query } from 'store/api/baseApi';
import { clearState } from 'store/bestOfTheYear/reducer';
import TopComponent from 'components/shared/TopComponent';

const Popular2019 = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetPopularIn2019Query(page);
  console.log('Popular2019 ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Popular in 2019'
    />
  );
};

export default Popular2019;
