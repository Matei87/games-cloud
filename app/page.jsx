'use client';
import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetBestOfTheYearQuery } from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';
import TopComponent from '@/components/shared/TopComponent';

const BestOfTheYear = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetBestOfTheYearQuery(page);

  console.log('bestOfTheYear ', page, data, error);

  // useEffect(() => {
  //   router.events.on(() => dispatch(clearState()));
  //   return () => {
  //     router.events.off(() => console.log('offset'));
  //   };
  // }, [router.events]);

  // if (data?.results) {
  //   const platforms = data.results.map(({ id, slug }) => ({ id, slug }));
  //   console.log(platforms);
  //   setPlatforms(platforms);
  // }

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Best of the year'
    />
  );
};

export default BestOfTheYear;
