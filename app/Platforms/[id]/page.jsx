'use client';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  selectBestOfTheYearPage,
  selectPlatforms,
} from '@/store/bestOfTheYear/selectors';
import {
  useGetPlatformDetailsQuery,
  useGetPlatformDataQuery,
} from '@/store/api/baseApi';
import { clearState } from '@/store/bestOfTheYear/reducer';

import GamesPlatform from '@/components/shared/GamesPlatform';
import { useParams } from 'next/navigation';

const Platform = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const platforms = useAppSelector(selectPlatforms);
  const { id } = useParams();

  console.log('platforms ', platforms, id);
  let platformId = null;
  if (platforms.length) {
    platformId = platforms.filter((info) => info.slug === id)[0].id;
  }
  console.log(platformId, page);
  const {
    data: platformDetailsData = [],
    error: platformDetailsError,
    isLoading: platformDetailsIsLoading,
  } = useGetPlatformDetailsQuery(id);
  console.log(id, platformId);

  const { data, error, isLoading } = useGetPlatformDataQuery({
    platformId,
    page,
  });

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <GamesPlatform
      data={data}
      error={error}
      isLoading={isLoading}
      page={page}
      title={platformDetailsData.name}
      description={platformDetailsData.description}
    />
  );
};

export default Platform;
