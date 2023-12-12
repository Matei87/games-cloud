import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import { useAppDispatch } from 'store/hooks';
import { setPagination } from 'store/bestOfTheYear/reducer';
import { Pagination } from 'antd';
import Loader from '../../components/Loader/Loader';
import { getPlatforms, setRating } from '@/components/shared/utils';
import { AiFillHeart } from 'react-icons/ai';
import NoData from '../../public/images/file-not-found.png';

const GamesPlatform = ({ data, error, isLoading, title, description }) => {
  const dispatch = useAppDispatch();
  // console.log('GamesPlatform ', data, error, isLoading, title);

  return (
    <div id='content' className='main-page'>
      <div className='container'>
        <div className='gamesDetails'>
          <h1 className='title'>Games for {title}</h1>
          <h1>{description && parse(`${description}`)}</h1>
        </div>

        <div>
          {!isLoading && data?.results.length === 0 && (
            <Image
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

        <div className='main-wrapper'>
          {isLoading && <Loader />}
          {error && <h1>An error occured..</h1>}

          {!isLoading &&
            !!data?.results.length &&
            data.results.map(
              ({
                id,
                background_image,
                platforms,
                metacritic,
                name,
                ratings,
              }) => {
                return (
                  <div className='wrapper' key={id}>
                    <div className='header'>
                      <Image
                        blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                        src={
                          background_image ||
                          'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                        }
                        width='421'
                        height='421'
                        alt='background'
                        style={{ objectFit: 'cover' }}
                      />
                      {/* <img src={background_image} alt='background' /> */}
                    </div>
                    <div className='body'>
                      <span className='platforms'>
                        {console.log(
                          'retunable ',
                          getPlatforms(platforms).length > 6
                            ? `${getPlatforms(platforms).slice(0, 6)} +${
                                getPlatforms(platforms).length - 6
                              }`
                            : getPlatforms(platforms)
                        )}
                        {platforms ? (
                          getPlatforms(platforms).length > 5 ? (
                            <>
                              {getPlatforms(platforms).slice(0, 5)}
                              <span className='platformLength'>{`+${
                                getPlatforms(platforms).length - 5
                              }`}</span>
                            </>
                          ) : (
                            getPlatforms(platforms)
                          )
                        ) : null}
                      </span>
                      <>
                        {metacritic ? (
                          <span
                            className={
                              metacritic <= 70
                                ? `metacritic yellow`
                                : metacritic >= 71 || metacritic <= 100
                                ? `metacritic green`
                                : null
                            }
                          >
                            {metacritic}
                          </span>
                        ) : null}
                      </>
                    </div>
                    <div className='footer'>
                      <span className='card-text'>
                        {name}
                        {ratings.length > 0 ? (
                          <>{setRating(ratings[0]['title'])}</>
                        ) : null}
                      </span>
                    </div>

                    <div className='overlay'>
                      <div className='overlay-content'>
                        {/* <button
                          type='button'
                          className='overlay-content-details'
                          onClick={() => {
                            // router.push({
                            //   pathname: `/details/${id}`,
                            //   query: { id: id },
                            // });
                            // router.push({
                            //   pathname: `/details/[id]`,
                            //   query: { id: id },
                            // });
                            router.push(`/details/${id}`);
                          }}
                        >
                          See More
                        </button> */}
                        <Link
                          className='overlay-content-details'
                          href={`/details/${id}`}
                        >
                          See More
                        </Link>
                        <span className='overlay-content-favorite'>
                          <AiFillHeart />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
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

export default GamesPlatform;
