'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'antd';
import { useAppDispatch } from '@/store/hooks';
import { setPagination } from '@/store/bestOfTheYear/reducer';
import Loader from '@/components/Loader/Loader';
import { BiUser } from 'react-icons/bi';
import NoData from '../../public/images/file-not-found.png';

const BrowseComponent = ({ data, isLoading, error, title }) => {
  const dispatch = useAppDispatch();

  console.log('BrowseComponent ', data);

  return (
    <div id='content' className='main-page'>
      <div className='container'>
        <div className='gamesDetails'>
          <h1 className='title'>{title}</h1>
        </div>

        <div>
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
        </div>

        <div className='main-wrapper platforms'>
          {isLoading && <Loader />}
          {error && <h1>An error occured..</h1>}

          {!isLoading &&
            !!data?.results.length &&
            data.results.map(
              ({
                id,
                image,
                image_background,
                name,
                slug,
                games_count,
                games,
                positions,
              }) => (
                <div className='wrapper' key={id}>
                  <div className='body-fixed'>
                    <Image
                      placeholder='blur'
                      blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                      src={
                        image ||
                        image_background ||
                        'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                      }
                      width='421'
                      height='421'
                      alt='background'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className='overlay-fixed'>
                    <span className='card-text'>
                      {/* <button
                        type='button'
                        className='overlay-content-link'
                        onClick={() => router.push(`/Platforms/${slug}`)}
                      >
                        {name}
                      </button> */}
                      {/* <Link
                        className='overlay-content-link'
                        href={`/Platforms/${slug}`}
                      >
                        {name}
                      </Link> */}
                      <span className='overlay-content-link'>{name}</span>
                      <div>
                        {positions
                          ? positions.map(({ id, name }) => (
                              <p className='position' key={id}>
                                {name}
                              </p>
                            ))
                          : null}
                      </div>
                    </span>
                    <div className='overlay-content-footer'>
                      <div>
                        <span>Popular items</span>
                        <span>
                          {games_count
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </span>
                      </div>
                      <ul>
                        {games.slice(0, 3).map(({ id, added, name }) => (
                          <li key={id}>
                            <Link href={`/details/${id}`}>{name}</Link>
                            <span>
                              {added
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                              <BiUser />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>

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

export default BrowseComponent;
