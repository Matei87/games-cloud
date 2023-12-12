// 'use client';
import Link from 'next/link';
import Web from '../../public/images/web.svg';
// import GamesContext from '@/context/GamesContext';
import Loader from '@/components/Loader/Loader';
import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import {
  AiFillWindows,
  AiFillAndroid,
  AiFillApple,
  AiFillHeart,
} from 'react-icons/ai';
import {
  SiNintendoswitch,
  SiNintendo3Ds,
  SiWii,
  SiWiiu,
  SiPlaystationvita,
  SiSega,
} from 'react-icons/si';
import { MdPhoneAndroid } from 'react-icons/md';
import Exceptional from '../../public/images/exceptional.png';
import Recommended from '../../public/images/recommended.png';
import Meh from '../../public/images/meh.png';
import Skip from '../../public/images/skip.png';

import { connect } from 'react-redux';

const Search = ({ searchResults, isSearchLoaded }) => {
  //const { searchResults, isLoaded } = useContext(GamesContext);
  console.log('searchResults', searchResults, isSearchLoaded);

  const setRating = (title) => {
    switch (title) {
      case 'exceptional':
        return (
          <span className='rating'>
            {' '}
            <img src={Exceptional} alt='exceptional' />
          </span>
        );
        break;
      case 'recommended':
        return (
          <span className='rating'>
            {' '}
            <img src={Recommended} alt='recommended' />
          </span>
        );
        break;
      case 'meh':
        return (
          <span className='rating'>
            {' '}
            <img src={Meh} alt='meh' />
          </span>
        );
        break;
      case 'skip':
        return (
          <span className='rating'>
            {' '}
            <img src={Skip} alt='skip' />
          </span>
        );
        break;
      default:
        return null;
    }
  };

  const getPlatforms = (platform) => {
    let platforms = [];
    for (let i in platform) {
      platforms.push(platform[i].platform['name']);
      //console.log(platform[i].platform['name']);
    }
    //console.log(platforms);
    //pc, playstation, xbox, android, mac, nintendo
    let hashtable = {};
    for (let i = 0; i < platforms.length; i++) {
      if (platforms[i] === 'PC') {
        hashtable['pc'] = ['PC'];
      } else if (
        platforms[i] === 'Xbox Series S/X' ||
        platforms[i] === 'Xbox One' ||
        platforms[i] === 'Xbox 360'
      ) {
        hashtable['xbox'] = ['xbox', 'Xbox Series S/X', 'Xbox 360'];
      } else if (
        platforms[i] === 'PlayStation' ||
        platforms[i] === 'PlayStation 3' ||
        platforms[i] === 'PlayStation 4' ||
        platforms[i] === 'PlayStation 5'
      ) {
        hashtable['playstation'] = [
          'PlayStation 3',
          'PlayStation 4',
          'PlayStation 5',
        ];
      } else if (platforms[i] === 'Nintendo Switch') {
        hashtable['nintendo_switch'] = ['Nintendo Switch'];
      } else if (platforms[i] === 'Wii') {
        hashtable['wii'] = ['Wii'];
      } else if (platforms[i] === 'Wii U') {
        hashtable['wiiu'] = ['Wii U'];
      } else if (platforms[i] === 'Android') {
        hashtable['android'] = ['Android'];
      } else if (
        platforms[i] === 'macOS' ||
        platforms[i] === 'Classic Macintosh'
      ) {
        hashtable['macos'] = ['macOS', 'Classic Macintosh'];
      } else if (platforms[i] === 'Linux') {
        hashtable['linux'] = ['Linux'];
      } else if (platforms[i] === 'iOS') {
        hashtable['ios'] = ['iOS'];
      } else if (platforms[i] === 'Nintendo DS') {
        hashtable['nintendods'] = ['Nintendo DS'];
      } else if (
        platforms[i] === 'Nintendo DS' ||
        platforms[i] === 'Nintendo 3DS' ||
        platforms[i] === 'Game Boy Advance'
      ) {
        hashtable['nintendo3ds'] = [
          'Nintendo DS',
          'Nintendo 3DS',
          'Game Boy Advance',
        ];
      } else if (platforms[i] === 'PS Vita') {
        hashtable['psvita'] = ['PS Vita'];
      } else if (platforms[i] === 'Web') {
        hashtable['web'] = ['Web'];
      } else if (
        platforms[i] === 'Dreamcast' ||
        platforms[i] === 'Genesis' ||
        platforms[i] === 'SEGA 32X'
      ) {
        hashtable['dreamcast'] = ['Dreamcast', 'Genesis'];
      }
    }
    //console.log(Object.keys(hashtable));

    return Object.keys(hashtable).map((platform) => {
      //console.log(platform);

      switch (platform) {
        case 'pc':
          return <AiFillWindows key={'PC'} />;
          break;
        case 'xbox':
          return <FaXbox key={'Xbox_One'} />;
          break;
        case 'linux':
          return <FaLinux key={'Linux'} />;
          break;
        case 'ios':
          return <MdPhoneAndroid key={'iOS'} />;
          break;
        case 'playstation':
          return <FaPlaystation key={'PlayStation'} />;
          break;
        case 'nintendo_switch':
          return <SiNintendoswitch key={'Nintendo_Switch'} />;
          break;
        case 'wii':
          return <SiWii key={'Wii'} className='wii' />;
          break;
        case 'android':
          return <AiFillAndroid key={'Android'} />;
          break;
        case 'macos':
          return <AiFillApple key={'macOS'} />;
          break;
        case 'wiiu':
          return <SiWiiu key={'wiiu'} className='wiiu' />;
          break;
        case 'nintendo3ds':
          return <SiNintendo3Ds key={'nintendo3ds'} />;
          break;
        case 'psvita':
          return <SiPlaystationvita key={'psvita'} className='psvita' />;
          break;
        case 'web':
          return <img src={Web} alt='web' key={'web'} className='web' />;
          break;
        case 'dreamcast':
          return <SiSega key={'dreamcast'} />;
          break;
        default:
          return null;
      }
    });
  };

  return (
    <div id='content' className='main-page'>
      <div className='container'>
        <div className='main-wrapper'>
          {searchResults ? (
            searchResults.map((data) => {
              return (
                <div className='wrapper' key={data.id}>
                  <div className='header'>
                    <img src={data.background_image} alt='background' />
                  </div>
                  <div className='body'>
                    <span className='platforms'>
                      {data.platforms ? getPlatforms(data.platforms) : null}
                    </span>
                    <>
                      {data.metacritic ? (
                        <span
                          className={
                            data.metacritic <= 70
                              ? `metacritic yellow`
                              : data.metacritic >= 71 || data.metacritic <= 100
                              ? `metacritic green`
                              : null
                          }
                        >
                          {data.metacritic}
                        </span>
                      ) : null}
                    </>
                  </div>
                  <div className='footer'>
                    <span className='card-text'>{data.name}</span>
                    {data.ratings.length > 0 ? (
                      <>{setRating(data.ratings[0]['title'])}</>
                    ) : null}
                  </div>

                  <div className='overlay'>
                    <div className='overlay-content'>
                      {/* <button
                        type='button'
                        className='overlay-content-details'
                        onClick={() => {
                          router.push({
                            pathname: `/details/[id]`,
                            query: { id: data.id },
                          });
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
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults,
  isSearchLoaded: state.search.isSearchLoaded,
});

export default connect(mapStateToProps)(Search);
