'use client';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectBestOfTheYearPage } from 'store/bestOfTheYear/selectors';
import { useGetPopularIn2020Query } from 'store/api/baseApi';
import { clearState } from 'store/bestOfTheYear/reducer';
import TopComponent from 'components/shared/TopComponent';

const Popular2020 = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetPopularIn2020Query(page);
  console.log('Popular2020 ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Popular in 2020'
    />
  );
};

export default Popular2020;
