'use client';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectBestOfTheYearPage } from 'store/bestOfTheYear/selectors';
import { useGetPublishersQuery } from 'store/api/baseApi';
import { clearState } from 'store/bestOfTheYear/reducer';

import BrowseComponent from 'components/shared/BrowseComponent';

const Publishers = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetPublishersQuery(page);
  console.log('Publishers ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <BrowseComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Publishers'
    />
  );
};

export default Publishers;
