'use client';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ContainerWrapper from '@/components/shared/ContainerWrapper';
import Image from 'next/image';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import parse from 'html-react-parser';
import 'react-image-gallery/styles/css/image-gallery.css';
import {
  getTags,
  getReleased,
  getPublisher,
  getStores,
  setRating,
  getPlatforms,
} from '@/components/shared/utils';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';

const Details = () => {
  //const [id, setId] = useState('');
  const [data, setData] = useState({
    isLoaded: false,
    details: [],
    pictures: [],
    similar: [],
    achievements: [],
    developersTeam: [],
  });
  const {
    details: {
      background_image,
      name,
      rating,
      genres,
      released,
      website,
      tags,
      developers,
      publishers,
      esrb_rating,
      clip,
      stores,
      platforms,
      description,
      playtime,
    },
    pictures,
    similar,
    achievements,
    developersTeam,
    isLoaded,
  } = data;

  const { id } = useParams();
  console.log('DetailsPage ', similar, id);

  const getDetails = async () => {
    try {
      setData((prev) => ({ ...prev, isLoaded: true }));
      const gamesApi = `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const screensApi = `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const similarGamesApi = `https://api.rawg.io/api/games/${id}/suggested?key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const achievementsApi = `https://api.rawg.io/api/games/${id}/achievements?key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const developerTeamApi = `https://api.rawg.io/api/games/${id}/development-team?key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const urls = [
        gamesApi,
        screensApi,
        similarGamesApi,
        achievementsApi,
        developerTeamApi,
      ];
      const request = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(
        request.map((req) => {
          if (req.status !== 200) {
            return [];
          } else {
            return req.json();
          }
        })
      );
      console.log('data97 ', data);
      setData({
        details: data[0],
        pictures: data[1].results || data[1],
        similar: data[2].results || data[2],
        achievements: data[3].results || data[3],
        developersTeam: data[4].results || data[4],
      });
    } catch (error) {
      console.error(error);
    }
    setData((prev) => ({ ...prev, isLoaded: false }));
  };

  useEffect(() => {
    // if(router && router.query){
    //   console.log('rouTer', router.query);
    //   setId(router.query.id);
    // }
    getDetails();
  }, []);

  console.log('details ', data, id);

  let images = [];
  for (let i in pictures) {
    images.push({ original: pictures[i]['image'] });
  }

  console.log(
    'images ',
    data.details.id !== id && <h1>There is a problem !!!</h1>
  );
  console.log('isLoaded ', isLoaded, data);
  return (
    <div id='details'>
      {/* {isLoaded && <Loader />} */}

      <>
        {data.details && (
          <div className='details-header'>
            <div
              className='details-header-image'
              style={{ backgroundImage: `url(${background_image || ''})` }}
            >
              <div className='details-header-tags'>{getTags(tags)}</div>
            </div>
          </div>
        )}

        <div className='details-wrapper container'>
          <div className='details-body'>
            <div className='details-header-details'>
              <div className='details-header-left'>
                <h1 className='details-header-name'>{name}</h1>
                <p className='details-header-left-details'>
                  <span className='star'>
                    <AiFillStar />
                  </span>
                  <span className='rating'>
                    {rating && rating.toString().slice(0, 3)}/5
                  </span>
                  |<span className='platforms'>{getPlatforms(platforms)}</span>
                </p>

                <ul className='game-details'>
                  <div className='dot'>
                    <h2 className='game-details-title'>Game Details</h2>
                  </div>
                  <li className='release-date'>
                    <span className='release-date-title'>Release Date:</span>
                    {released ? (
                      <span>{getReleased(released)}</span>
                    ) : (
                      <span>TBA</span>
                    )}
                  </li>

                  <li className='genres'>
                    <span className='genres-title'>Genre:</span>
                    {genres && genres.length >= 1 ? (
                      <span>
                        {genres.slice(0, 2).map((genre) => {
                          return (
                            <Fragment key={genre.name}>
                              <span className='genre'>{genre.name}</span>
                              <span className='line'>-</span>
                            </Fragment>
                          );
                        })}
                      </span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </li>

                  {developers && developers.length >= 1 ? (
                    <li className='developers'>
                      <span className='developers-title'>Developers:</span>
                      <span>
                        {developers.map((developer) => {
                          return (
                            <Fragment key={developer.name}>
                              <span className='developer'>
                                {developer.name}
                              </span>
                              <span className='line'>/</span>
                            </Fragment>
                          );
                        })}
                      </span>
                    </li>
                  ) : null}

                  {publishers && publishers.length >= 1 ? (
                    <li className='publishers'>
                      <span className='publishers-title'>Publisher:</span>
                      <span>{getPublisher(publishers)}</span>
                    </li>
                  ) : null}

                  <li className='recomendeds'>
                    <span className='recomended-title'>Recommended:</span>
                    <span>
                      {esrb_rating ? (
                        <span className='recommended'>
                          {esrb_rating['name'] === 'Everyone'
                            ? '0+ Everyone'
                            : esrb_rating['name'] === 'Teen'
                            ? '13+ Teen'
                            : esrb_rating['name'] === 'Mature'
                            ? '17+ Mature'
                            : esrb_rating['name'] === 'Adults Only'
                            ? '18+ Adults Only'
                            : esrb_rating['name'] === 'Rating Pending'
                            ? 'Rating Pending'
                            : null}
                        </span>
                      ) : (
                        'Not Rated'
                      )}
                    </span>
                  </li>

                  {website && (
                    <li className='websites'>
                      <span className='website-title'>Website:</span>
                      <span>
                        <Link
                          className='website'
                          target='_blank'
                          href={website}
                        >
                          {website}
                        </Link>
                      </span>
                    </li>
                  )}

                  {!!playtime && (
                    <li className='publishers'>
                      <span className='publishers-title'>
                        Average Playtime:
                      </span>
                      <span>{playtime} hours</span>
                    </li>
                  )}
                </ul>

                {stores && !!stores.length && (
                  <div className='badges'>
                    <div className='dot'>
                      <h2 className='badges-title'>Where to Buy</h2>
                    </div>
                    <div className='buy'>
                      <>{getStores(stores)}</>
                    </div>
                  </div>
                )}

                <div className='description'>
                  <div className='dot'>
                    <h2 className='description-title'>Description</h2>
                  </div>
                  {description ? <>{parse(description)}</> : null}
                </div>
              </div>

              <div className='details-header-right'>
                {clip ? (
                  <video
                    className='embed-responsive-item'
                    width='100%'
                    height='350px'
                    controls
                    autoPlay
                    muted
                    allowFullScreen
                  >
                    <source src={clip['clip']} type='video/mp4' />
                  </video>
                ) : null}
                <span className='pictures'>
                  <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showPlayButton={false}
                    showBullets={true}
                    autoPlay={false}
                  />
                </span>

                {platforms ? (
                  <>
                    {platforms.map((plat) => {
                      return plat.platform['name'].includes('PC') &&
                        Object.keys(plat.requirements).length ? (
                        <div className='requirements' key='requirements'>
                          <div className='dot'>
                            <div className='requirements-title'>
                              System Requirements
                            </div>
                          </div>
                          {plat.requirements['minimum'] &&
                          !plat.requirements['recommended'] ? (
                            <>
                              <div
                                className='nav nav-tabs'
                                id='nav-tab'
                                role='tablist'
                              >
                                <Link
                                  className='nav-link active'
                                  id='nav-home-tab'
                                  data-bs-toggle='tab'
                                  role='tab'
                                  aria-controls='nav-home'
                                  aria-selected='true'
                                  href='#nav-home'
                                >
                                  Minimum
                                </Link>
                              </div>
                              <div className='tab-content' id='nav-tabContent'>
                                <div
                                  className='tab-pane fade show active'
                                  id='nav-home'
                                  role='tabpanel'
                                  aria-labelledby='nav-home-tab'
                                  style={{
                                    whiteSpace: 'pre-line',
                                    textAlign: 'left',
                                  }}
                                >
                                  {parse(plat.requirements['minimum'])}
                                </div>
                              </div>
                            </>
                          ) : plat.requirements['recommended'] &&
                            !plat.requirements['minimum'] ? (
                            <Fragment>
                              <div
                                className='nav nav-tabs'
                                id='nav-tab'
                                role='tablist'
                              >
                                <Link
                                  className='nav-link'
                                  id='nav-profile-tab'
                                  data-bs-toggle='tab'
                                  role='tab'
                                  aria-controls='nav-profile'
                                  aria-selected='false'
                                  href='#nav-profile'
                                >
                                  Recommended
                                </Link>
                              </div>
                              <div className='tab-content' id='nav-tabContent'>
                                <div
                                  className='tab-pane fade show active'
                                  id='nav-profile'
                                  role='tabpanel'
                                  aria-labelledby='nav-profile-tab'
                                  style={{
                                    whiteSpace: 'pre-line',
                                    textAlign: 'left',
                                  }}
                                >
                                  {parse(plat.requirements['recommended'])}
                                </div>
                              </div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <div
                                className='nav nav-tabs'
                                id='nav-tab'
                                role='tablist'
                              >
                                <Link
                                  className='nav-link active'
                                  id='nav-home-tab'
                                  data-bs-toggle='tab'
                                  role='tab'
                                  aria-controls='nav-home'
                                  aria-selected='true'
                                  href='#nav-home'
                                >
                                  Minimum
                                </Link>
                                <Link
                                  className='nav-link'
                                  id='nav-profile-tab'
                                  data-bs-toggle='tab'
                                  role='tab'
                                  aria-controls='nav-profile'
                                  aria-selected='false'
                                  href='#nav-profile'
                                >
                                  Recommended
                                </Link>
                              </div>
                              <div className='tab-content' id='nav-tabContent'>
                                <div
                                  className='tab-pane fade show active'
                                  id='nav-home'
                                  role='tabpanel'
                                  aria-labelledby='nav-home-tab'
                                  style={{
                                    whiteSpace: 'pre-line',
                                    textAlign: 'left',
                                  }}
                                >
                                  {parse(plat.requirements['minimum'])}
                                </div>
                                <div
                                  className='tab-pane fade'
                                  id='nav-profile'
                                  role='tabpanel'
                                  aria-labelledby='nav-profile-tab'
                                  style={{
                                    whiteSpace: 'pre-line',
                                    textAlign: 'left',
                                  }}
                                >
                                  {parse(plat.requirements['recommended'])}
                                </div>
                              </div>
                            </Fragment>
                          )}
                        </div>
                      ) : null;
                    })}
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {similar && !!similar.length && (
            <div className='details-content'>
              <div id='content' className='similar'>
                <h1 className='similar-content-title'>
                  Similar to <span>{name}</span>:
                </h1>

                <div className='main-wrapper'>
                  {similar.map((games) => {
                    //console.log(games);

                    return (
                      <div className='wrapper' key={games.id}>
                        <div className='header'>
                          <Image
                            placeholder='blur'
                            blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                            src={games.background_image}
                            width='100'
                            height='100'
                            alt='background'
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <div className='body'>
                          <span className='platforms'>
                            {games.platforms
                              ? getPlatforms(games.platforms)
                              : null}
                          </span>
                          <>
                            {games.metacritic ? (
                              <span
                                className={
                                  games.metacritic <= 70
                                    ? `metacritic yellow`
                                    : games.metacritic >= 71 ||
                                      games.metacritic <= 100
                                    ? `metacritic green`
                                    : null
                                }
                              >
                                {games.metacritic}
                              </span>
                            ) : null}
                          </>
                        </div>
                        <div className='footer'>
                          <span className='card-text'>
                            {setName(games.name)}
                          </span>
                          {games.ratings && games.ratings.length > 0 ? (
                            <>{setRating(games.ratings[0].title)}</>
                          ) : null}
                        </div>

                        <div className='overlay'>
                          <div className='overlay-content'>
                            <Link
                              href={`/details/${id}`}
                              className='overlay-content-details'
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
                  })}
                </div>
              </div>
            </div>
          )}

          {achievements && !!achievements.length && (
            <div className='details-content'>
              <div id='content' className='achievements'>
                <h1 className='achievements-content-title'>
                  <span>{name} achievements</span>
                </h1>
                <div className='main-wrapper'>
                  {achievements.map(
                    ({ id, image, name, percent, description }) => (
                      <div className='wrapper' key={id}>
                        <div className='picture'>
                          <Image
                            placeholder='blur'
                            blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                            src={image}
                            width='60'
                            height='60'
                            alt='achievement'
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className='content'>
                          <div className='percent'>{percent}%</div>
                          <div className='name'>{name}</div>
                          <div className='description'>{description}</div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {developersTeam && !!developersTeam.length && (
            <div className='details-content'>
              <div id='content' className='developers'>
                <h1 className='developers-content-title'>
                  <span>{name} created by</span>
                </h1>
                <ContainerWrapper data={developersTeam} />
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

//export default withRouter(Details);
export default Details;

{
  /* <button
                                type='button'
                                className='overlay-content-details'
                                onClick={() => {
                                  // router.push({
                                  //   pathname: `/details/[id]`,
                                  //   query: { id: data.id },
                                  // });
                                  router.push(`/details/${id}`);
                                }}
                              >
                                See More
                              </button> */
}
