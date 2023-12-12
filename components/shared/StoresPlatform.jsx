'use client';
import Image from 'next/image';
import { Pagination } from 'antd';
import { useAppDispatch } from 'store/hooks';
import { setPagination } from 'store/bestOfTheYear/reducer';
import Loader from 'components/Loader/Loader';
import NoData from '../../public/images/file-not-found.png';
import ContainerWrapper from './ContainerWrapper';

const StoresPlatform = ({ data, isLoading, error, title }) => {
  const dispatch = useAppDispatch();

  console.log('BrowseComponent ', data);

  return (
    <div id='content' className='main-page'>
      <div className='container'>
        <div className='gamesDetails'>
          <h1 className='title'>{title}</h1>
        </div>

        <>
          {!isLoading && data?.results.length === 0 && (
            <Image
              placeholder='blur'
              blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
              src={
                NoData ||
                'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
              }
              width='1800'
              height='1200'
              alt='nodata'
              style={{ objectFit: 'contain' }}
            />
          )}
        </>

        {isLoading && <Loader />}
        {error && <h1>An error occured..</h1>}

        {!isLoading && !!data?.results.length && (
          <ContainerWrapper data={data.results} />
        )}

        {!error && data && data?.results.length > 0 && (
          <Pagination
            className='pagination'
            defaultCurrent={1}
            total={Math.floor(data.count / 20)}
            defaultPageSize={1}
            onChange={(current, pageSize) => {
              dispatch(
                setPagination({
                  page: current,
                  size: pageSize,
                })
              );
            }}
          />
        )}
      </div>
    </div>
  );
};

export default StoresPlatform;
