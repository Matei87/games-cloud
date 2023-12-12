'use client';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetThisWeekQuery } from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';
import TopComponent from '@/components/shared/TopComponent';

const ThisWeek = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetThisWeekQuery(page);
  console.log('ThisWeek ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='This Week'
    />
  );
};

export default ThisWeek;
