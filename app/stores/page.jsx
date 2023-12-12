'use client';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetStoresQuery } from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';
import StoresPlatform from '@/components/shared/StoresPlatform';

const Stores = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetStoresQuery(page);
  console.log('Stores ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <StoresPlatform
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title='Stores'
    />
  );
};

export default Stores;
