'use client';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetNextWeekQuery } from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';
import TopComponent from '@/components/shared/TopComponent';

const NextWeek = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetNextWeekQuery(page);
  console.log('NextWeek ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Next Week'
    />
  );
};

export default NextWeek;
