'use client';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectBestOfTheYearPage } from 'store/bestOfTheYear/selectors';
import { useGetAllTimePopularQuery } from 'store/api/baseApi';
import { clearState } from 'store/bestOfTheYear/reducer';
import TopComponent from 'components/shared/TopComponent';

const AllTimePopular = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetAllTimePopularQuery(page);
  console.log('AllTimePopular ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  return (
    <TopComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='All Time Popular'
    />
  );
};

export default AllTimePopular;
