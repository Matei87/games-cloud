'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { push as Menu } from 'react-burger-menu';
import {
  FaXbox,
  FaUserAlt,
  FaHashtag,
  FaCode,
  FaPlaystation,
} from 'react-icons/fa';
import { GiTrophy, GiOpenFolder, GiGamepad } from 'react-icons/gi';
import {
  AiFillStar,
  AiFillFire,
  AiFillAndroid,
  AiFillWindows,
} from 'react-icons/ai';
import { IoIosPodium } from 'react-icons/io';
import { GrChapterNext } from 'react-icons/gr';
import { FaDownload, FaGhost, FaCrown } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { MdPhoneAndroid, MdOutlinePublishedWithChanges } from 'react-icons/md';

const SideMenu = (props) => {
  const router = usePathname();
  console.log('SideMenu ', router);

  return (
    <Menu {...props}>
      <ul>
        <p>Top</p>
        <li className={router.asPath === '/' ? 'selected' : ''}>
          <span>
            <GiTrophy />
          </span>
          <Link href='/'>Best of the year</Link>
        </li>
        <li className={router.asPath === '/popular-in-2022' ? 'selected' : ''}>
          <span>
            <IoIosPodium />
          </span>
          <Link href='/popular-in-2022'>Popular in 2022</Link>
        </li>
        <li className={router.asPath === '/popular-in-2021' ? 'selected' : ''}>
          <span>
            <IoIosPodium />
          </span>
          <Link href='/popular-in-2021'>Popular in 2021</Link>
        </li>
        <li className={router.asPath === '/popular-in-2020' ? 'selected' : ''}>
          <span>
            <IoIosPodium />
          </span>
          <Link href='/popular-in-2020'>Popular in 2020</Link>
        </li>
        <li className={router.asPath === '/popular-in-2019' ? 'selected' : ''}>
          <span>
            <IoIosPodium />
          </span>
          <Link href='/popular-in-2019'>Popular in 2019</Link>
        </li>
        <li className={router.asPath === '/all-time-popular' ? 'selected' : ''}>
          <span>
            <FaCrown />
          </span>
          <Link href='/all-time-popular'>All time popular</Link>
        </li>
      </ul>

      <ul>
        <p>New Releases</p>
        <li className={router.asPath === '/last-30-days' ? 'selected' : ''}>
          <span>
            <AiFillStar />
          </span>
          <Link href='/last-30-days'>Last 30 days</Link>
        </li>
        <li className={router.asPath === '/this-week' ? 'selected' : ''}>
          <span>
            <AiFillFire />
          </span>
          <Link href='/this-week'>This week</Link>
        </li>
        <li className={router.asPath === '/next-week' ? 'selected' : ''}>
          <span>
            <GrChapterNext />
          </span>
          <Link href='/next-week'>Next week</Link>
        </li>
      </ul>

      <ul>
        <p>Browse</p>
        <li className={router.asPath === '/Platforms' ? 'selected' : ''}>
          <span>
            <GiGamepad />
          </span>
          <Link href='/Platforms'>Platforms</Link>
        </li>
        <li className={router.asPath === '/stores' ? 'selected' : ''}>
          <span>
            <FaDownload />
          </span>
          <Link href='/stores'>Stores</Link>
        </li>
        <li className={router.asPath === '/genres' ? 'selected' : ''}>
          <span>
            <FaGhost />
          </span>
          <Link href='/genres'>Genres</Link>
        </li>

        <li className={router.asPath === '/collections' ? 'selected' : ''}>
          <span>
            <GiOpenFolder />
          </span>
          <Link href='/collections'>Collections</Link>
        </li>
        <li className={router.asPath === '/creators' ? 'selected' : ''}>
          <span>
            <FaUserAlt />
          </span>
          <Link href='/creators'>Creators</Link>
        </li>
        <li className={router.asPath === '/tags' ? 'selected' : ''}>
          <span>
            <FaHashtag />
          </span>
          <Link href='/tags'>Tags</Link>
        </li>
        <li className={router.asPath === '/developers' ? 'selected' : ''}>
          <span>
            <FaCode />
          </span>
          <Link href='/developers'>Developers</Link>
        </li>
        <li className={router.asPath === '/publishers' ? 'selected' : ''}>
          <span>
            <MdOutlinePublishedWithChanges />
          </span>
          <Link href='/publishers'>Publishers</Link>
        </li>
      </ul>

      <ul>
        <p>Platforms</p>
        <li className={router.asPath === '/Platforms/pc' ? 'selected' : ''}>
          <span>
            <AiFillWindows />
          </span>
          <Link href='/Platforms/pc'>PC</Link>
        </li>
        <li
          className={
            router.asPath === '/Platforms/playstation4' ? 'selected' : ''
          }
        >
          <span>
            <FaPlaystation />
          </span>
          <Link href='/Platforms/playstation4'>Playstation 4</Link>
        </li>
        <li
          className={router.asPath === '/Platforms/xbox-one' ? 'selected' : ''}
        >
          <span>
            <FaXbox />
          </span>
          <Link href='/Platforms/xbox-one'>Xbox One</Link>
        </li>
        <li
          className={
            router.asPath === '/Platforms/nintendoswitch' ? 'selected' : ''
          }
        >
          <span>
            <SiNintendoswitch />
          </span>
          <Link href='/Platforms/nintendo-switch'>Nintendo Switch</Link>
        </li>
        <li className={router.asPath === '/Platforms/ios' ? 'selected' : ''}>
          <span>
            <MdPhoneAndroid />
          </span>
          <Link href='/Platforms/ios'>iOS</Link>
        </li>
        <li
          className={router.asPath === '/Platforms/android' ? 'selected' : ''}
        >
          <span>
            <AiFillAndroid />
          </span>
          <Link href='/Platforms/android'>Android</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default SideMenu;
