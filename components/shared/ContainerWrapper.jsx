import Link from 'next/link';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';

const ContainerWrapper = ({ data }) => {
  return (
    <div className='main-wrapper platforms'>
      {data.map(
        ({
          id,
          image,
          image_background,
          name,
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
                width='500'
                height='500'
                alt='background'
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className='overlay-fixed'>
              <span className='card-text'>
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
                  <span>Known for</span>
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
                        {added.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
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
  );
};

export default ContainerWrapper;
