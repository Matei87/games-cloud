import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaXbox, FaPlaystation, FaLinux } from 'react-icons/fa';
import {
  SiNintendoswitch,
  SiGogdotcom,
  SiSteam,
  SiEpicgames,
  SiWii,
  SiWiiu,
  SiNintendo3Ds,
  SiPlaystationvita,
  SiItchdotio,
  SiSega,
} from 'react-icons/si';
import { GrGooglePlay, GrAppleAppStore } from 'react-icons/gr';
import { AiFillWindows, AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi';
import { BsGlobe } from 'react-icons/bs';

export const getReleased = (date) => {
  let split = date.replace('-', '').replace('-', '');
  return split.slice(6, 8) + '/' + split.slice(4, 6) + '/' + split.slice(0, 4);
};

export const getTags = (tag) => {
  let tags = [];
  for (let i in tag) {
    tags.push(tag[i]['name']);
  }
  return (
    <Fragment key={'tags'}>
      <span className='badge'>{tags.slice(0, 1)}</span>
      <span className='badge'>{tags.slice(1, 2)}</span>
      <span className='badge'>{tags.slice(2, 3)}</span>
    </Fragment>
  );
};

export const getPublisher = (publisher) => {
  let publishers = [];
  for (let i in publisher) {
    publishers.push(publisher[i]['name']);
  }
  return publishers.join(' | ');
};

export const getStores = (store) => {
  let storeName = [];
  let links = [];
  for (let i in store) {
    //console.log('STORE ', store[i].store.domain);
    storeName.push([store[i].store.name, store[i].store.domain]);
    links.push(store[i].store.domain);
    //console.log(store[i]);
  }
  //console.log(storeName);
  return storeName.map((store) => {
    //console.log(store, links);
    const link = [];
    for (let i in links) {
      link.push(links[i]);
    }

    switch (store[0]) {
      case 'GOG':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'GOG'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              GOG <SiGogdotcom />
            </span>
          </Link>
        );
        break;
      case 'Xbox Store':
        return (
          <Link
            target='_blank'
            className='store'
            rel='noreferrer'
            key={'Xbox_Store'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              Xbox Store <FaXbox />
            </span>
          </Link>
        );
        break;
      case 'Steam':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'Steam'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              Steam <SiSteam />
            </span>
          </Link>
        );
        break;
      case 'Epic Games':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'Epic_Games'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              Epic Games <SiEpicgames />
            </span>
          </Link>
        );
        break;
      case 'PlayStation Store':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'PlayStation_Store'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              PlayStation Store <FaPlaystation />
            </span>
          </Link>
        );
        break;
      case 'Nintendo Store':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'Nintendo_Store'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              Nintendo Store <SiNintendoswitch />
            </span>
          </Link>
        );
        break;
      case 'Google Play':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'Google_Play'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              Google Play <GrGooglePlay />
            </span>
          </Link>
        );
        break;
      case 'App Store':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'App_Store'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              App Store <GrAppleAppStore />
            </span>
          </Link>
        );
        break;
      case 'itch.io':
        return (
          <Link
            className='store'
            target='_blank'
            rel='noreferrer'
            key={'itch_io'}
            href={'https://' + store[1]}
          >
            <span className='badge'>
              itch.io <SiItchdotio />
            </span>
          </Link>
        );
        break;

      default:
        return null;
        break;
    }
  });
};

export const setName = (name) => {
  let pieces = name.toLowerCase().split(' ');
  let newWords = pieces.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return newWords.join(' ');
};

export const getPlatforms = (platform) => {
  let platforms = [];
  for (let i in platform) {
    platforms.push(platform[i].platform['name']);
  }
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
      platforms[i] === 'PlayStation 2' ||
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
    } else if (
      platforms[i] === 'Nintendo DS' ||
      platforms[i] === 'Nintendo 3DS' ||
      platforms[i] === 'Game Boy Advance' ||
      platforms[i] === 'Game Boy' ||
      platforms[i] === 'Game Boy Color'
    ) {
      hashtable['nintendo3ds'] = [
        'Nintendo DS',
        'Nintendo 3DS',
        'Game Boy Advance',
        'Game Boy',
        'Game Boy Color',
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
      hashtable['dreamcast'] = ['Dreamcast', 'Genesis', 'SEGA 32X'];
    } else if (
      platforms[i] === 'GameCube' ||
      platforms[i] === 'SNES' ||
      platforms[i] === 'Nintendo 64'
    ) {
      hashtable['gameCube'] = ['GameCube', 'SNES', 'Nintendo 64'];
    }
  }

  return Object.keys(hashtable).map((platform) => {
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
        return <BsGlobe key={'web'} />;
        break;
      case 'dreamcast':
        return <SiSega key={'dreamcast'} />;
        break;
      case 'gameCube':
        return <GiGamepad key={'gameCube'} />;
        break;
      default:
        return null;
    }
  });
};

export const setRating = (title) => {
  switch (title) {
    case 'exceptional':
      return (
        <Image
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          src='/images/exceptional.png'
          width='30'
          height='30'
          alt='exceptional'
        />
      );
      break;
    case 'recommended':
      return (
        <Image
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          src='/images/recommended.png'
          width='30'
          height='30'
          alt='recommended'
        />
      );
      break;
    case 'meh':
      return (
        <Image
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          src='/images/meh.png'
          width='30'
          height='30'
          alt='meh'
        />
      );
      break;
    case 'skip':
      return (
        <Image
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          src='/images/skip.png'
          width='30'
          height='30'
          alt='skip'
        />
      );
      break;
    default:
      return null;
  }
};

// const setRating = (title) => {
//   //console.log(title[0]);

//   switch (title) {
//     case 'exceptional':
//       return (
//         <span className='rating'>
//           <Image
//             placeholder='blur'
//             blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
//             src='/images/exceptional.png'
//             width='160'
//             height='160'
//             alt='exceptional'
//             style={{ objectFit: 'contain' }}
//           />
//         </span>
//       );
//       break;
//     case 'recommended':
//       return (
//         <span className='rating'>
//           <Image
//             placeholder='blur'
//             blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
//             src='/images/recommended.png'
//             width='160'
//             height='160'
//             alt='recommended'
//             style={{ objectFit: 'contain' }}
//           />
//         </span>
//       );
//       break;
//     case 'meh':
//       return (
//         <span className='rating'>
//           <Image
//             placeholder='blur'
//             blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
//             src='/images/meh.png'
//             width='160'
//             height='160'
//             alt='meh'
//             style={{ objectFit: 'contain' }}
//           />
//         </span>
//       );
//       break;
//     case 'skip':
//       return (
//         <span className='rating'>
//           <Image
//             placeholder='blur'
//             blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
//             src='/images/skip.png'
//             width='160'
//             height='160'
//             alt='skip'
//             style={{ objectFit: 'contain' }}
//           />
//         </span>
//       );
//       break;
//     default:
//       return null;
//   }
// };

// const getPlatforms = (platform) => {
//   let platforms = [];
//   for (let i in platform) {
//     platforms.push(platform[i].platform['name']);
//     //console.log(platform[i].platform['name']);
//   }
//   //console.log(platforms);
//   //pc, playstation, xbox, android, mac, nintendo
//   let hashtable = {};
//   for (let i = 0; i < platforms.length; i++) {
//     if (platforms[i] === 'PC') {
//       hashtable['pc'] = ['PC'];
//     } else if (
//       platforms[i] === 'Xbox Series S/X' ||
//       platforms[i] === 'Xbox One' ||
//       platforms[i] === 'Xbox 360'
//     ) {
//       hashtable['xbox'] = ['xbox', 'Xbox Series S/X', 'Xbox 360'];
//     } else if (
//       platforms[i] === 'PlayStation' ||
//       platforms[i] === 'PlayStation 2' ||
//       platforms[i] === 'PlayStation 3' ||
//       platforms[i] === 'PlayStation 4' ||
//       platforms[i] === 'PlayStation 5'
//     ) {
//       hashtable['playstation'] = [
//         'PlayStation 3',
//         'PlayStation 4',
//         'PlayStation 5',
//       ];
//     } else if (platforms[i] === 'Nintendo Switch') {
//       hashtable['nintendo_switch'] = ['Nintendo Switch'];
//     } else if (platforms[i] === 'Wii') {
//       hashtable['wii'] = ['Wii'];
//     } else if (platforms[i] === 'Wii U') {
//       hashtable['wiiu'] = ['Wii U'];
//     } else if (platforms[i] === 'Android') {
//       hashtable['android'] = ['Android'];
//     } else if (
//       platforms[i] === 'macOS' ||
//       platforms[i] === 'Classic Macintosh'
//     ) {
//       hashtable['macos'] = ['macOS', 'Classic Macintosh'];
//     } else if (platforms[i] === 'Linux') {
//       hashtable['linux'] = ['Linux'];
//     } else if (platforms[i] === 'iOS') {
//       hashtable['ios'] = ['iOS'];
//     } else if (
//       platforms[i] === 'Nintendo DS' ||
//       platforms[i] === 'Nintendo 3DS' ||
//       platforms[i] === 'Game Boy Advance' ||
//       platforms[i] === 'Game Boy' ||
//       platforms[i] === 'Game Boy Color'
//     ) {
//       hashtable['nintendo3ds'] = [
//         'Nintendo DS',
//         'Nintendo 3DS',
//         'Game Boy Advance',
//         'Game Boy',
//         'Game Boy Color',
//       ];
//     } else if (platforms[i] === 'PS Vita') {
//       hashtable['psvita'] = ['PS Vita'];
//     } else if (platforms[i] === 'Web') {
//       hashtable['web'] = ['Web'];
//     } else if (
//       platforms[i] === 'Dreamcast' ||
//       platforms[i] === 'Genesis' ||
//       platforms[i] === 'SEGA 32X'
//     ) {
//       hashtable['dreamcast'] = ['Dreamcast', 'Genesis', 'SEGA 32X'];
//     } else if (
//       platforms[i] === 'GameCube' ||
//       platforms[i] === 'SNES' ||
//       platforms[i] === 'Nintendo 64'
//     ) {
//       hashtable['gameCube'] = ['GameCube', 'SNES', 'Nintendo 64'];
//     }
//   }
//   //console.log(Object.keys(hashtable));

//   return Object.keys(hashtable).map((platform) => {
//     //console.log(platform);

//     switch (platform) {
//       case 'pc':
//         return <AiFillWindows key={'PC'} />;
//         break;
//       case 'xbox':
//         return <FaXbox key={'Xbox_One'} />;
//         break;
//       case 'linux':
//         return <FaLinux key={'Linux'} />;
//         break;
//       case 'ios':
//         return <MdPhoneAndroid key={'iOS'} />;
//         break;
//       case 'playstation':
//         return <FaPlaystation key={'PlayStation'} />;
//         break;
//       case 'nintendo_switch':
//         return <SiNintendoswitch key={'Nintendo_Switch'} />;
//         break;
//       case 'wii':
//         return <SiWii key={'Wii'} className='wii' />;
//         break;
//       case 'android':
//         return <AiFillAndroid key={'Android'} />;
//         break;
//       case 'macos':
//         return <AiFillApple key={'macOS'} />;
//         break;
//       case 'wiiu':
//         return <SiWiiu key={'wiiu'} className='wiiu' />;
//         break;
//       case 'nintendo3ds':
//         return <SiNintendo3Ds key={'nintendo3ds'} />;
//         break;
//       case 'psvita':
//         return <SiPlaystationvita key={'psvita'} className='psvita' />;
//         break;
//       case 'web':
//         return (
//           <Image
//             className='web'
//             placeholder='blur'
//             blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
//             src='/images/webu.png'
//             width='160'
//             height='160'
//             alt='web'
//             style={{ objectFit: 'contain' }}
//           />
//         );
//         break;
//       case 'dreamcast':
//         return <SiSega key={'dreamcast'} />;
//         break;
//       case 'gameCube':
//         return <GiGamepad key={'gameCube'} />;
//         break;
//       default:
//         return null;
//     }
//   });
// };
