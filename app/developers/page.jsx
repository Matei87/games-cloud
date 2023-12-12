'use client';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectBestOfTheYearPage } from 'store/bestOfTheYear/selectors';
import { useGetDevelopersQuery } from 'store/api/baseApi';
import { clearState } from 'store/bestOfTheYear/reducer';

import BrowseComponent from 'components/shared/BrowseComponent';

const Developers = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetDevelopersQuery(page);
  console.log('Developers ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <BrowseComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Developers'
    />
  );
};

export default Developers;
