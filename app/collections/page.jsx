'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Pagination } from 'antd';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectBestOfTheYearPage } from '@/store/bestOfTheYear/selectors';
import { useGetCollectionsQuery } from '@/store/api/baseApi';
import { clearState, setPagination } from '@/store/bestOfTheYear/reducer';
import { PiGameControllerDuotone } from 'react-icons/pi';
import { AiOutlineLike } from 'react-icons/ai';
import Loader from '@/components/Loader/Loader';

const Collections = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectBestOfTheYearPage);
  const { data, error, isLoading } = useGetCollectionsQuery(page);
  console.log('Collections ', page, data);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, clearState]);

  return (
    <div id='content' className='main-page'>
      <div className='container'>
        <div className='gamesDetails'>
          <h1 className='title'>Collections</h1>
        </div>
        <div className='main-wrapper platforms'>
          {isLoading && <Loader />}
          {error && <h1>An error occured..</h1>}

          {!isLoading &&
            data?.results.length &&
            data.results.map(
              ({
                id,
                game_background,
                name,
                likes_count,
                creator,
                games_count,
                followers_count,
              }) => (
                <div className='wrapper' key={id}>
                  <div className='body-fixed'>
                    <Image
                      placeholder='blur'
                      blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                      src={
                        game_background.url ||
                        'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                      }
                      width='500'
                      height='500'
                      style={{ objectFit: 'cover' }}
                      alt='background'
                    />
                  </div>

                  <div className='overlay-fixed'>
                    <span className='card-text'>
                      <span className='overlay-content-link'>{name}</span>
                    </span>
                    <div className='overlay-content-footer'>
                      <div>
                        <span>Collection by</span>
                        <span>{creator['username']}</span>
                      </div>
                      <ul>
                        <li>
                          <span>Games</span>
                          <span>
                            {games_count}
                            <PiGameControllerDuotone className='svg' />
                          </span>
                        </li>
                        <li>
                          <span>Likes</span>
                          <span>
                            {likes_count}
                            <AiOutlineLike className='svg' />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>

        {!error && data && (
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

export default Collections;
