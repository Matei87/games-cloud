'use client';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectBestOfTheYearPage } from 'store/bestOfTheYear/selectors';
import { useGetPlatformsQuery } from 'store/api/baseApi';
import { clearState } from 'store/bestOfTheYear/reducer';

import BrowseComponent from '@/components/shared/BrowseComponent';

const Platforms = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetPlatformsQuery(page);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <BrowseComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Platforms'
    />
  );
};

export default Platforms;
