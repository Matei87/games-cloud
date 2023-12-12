'use client';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetCreatorsQuery } from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';
import BrowseComponent from '@/components/shared/BrowseComponent';

const Creators = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetCreatorsQuery(page);
  console.log('Creators ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <BrowseComponent
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Creators'
    />
  );
};

export default Creators;
