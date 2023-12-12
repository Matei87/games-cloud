'use client';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetPopularIn2021Query } from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';
import TopComponent from '@/components/shared/TopComponent';

const Popular2021 = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetPopularIn2021Query(page);
  console.log('Popular2021 ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Popular in 2021'
    />
  );
};

export default Popular2021;
