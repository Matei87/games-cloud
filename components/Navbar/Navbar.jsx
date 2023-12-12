'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';
// import { searchAction } from '../../redux/actions/actions';
// import { connect } from 'react-redux';

const Navbar = ({ getData }) => {
  const [data, setData] = useState('');

  let navigate = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target['name'].value);
    getData(e.target['name'].value);
    navigate.push('/search');
    setData('');
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <nav className='navbar navbar-expand-lg fixed-top'>
      <div className='container'>
        {/* <Link className='navbar-brand' href='/'>
          <img src={Logo} alt='logo' />
        </Link> */}
        <Link className='navbar-brand' href='/'>
          <Image
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
            src='/images/logo.png'
            width='149'
            height='111'
            alt='logo'
            style={{ objectFit: 'contain' }}
          />
        </Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
        <div className='collapse navbar-collapse' id='navbarContent'>
          <form className='form-group' onSubmit={onSubmit}>
            <button className='btn' type='submit'>
              <AiOutlineSearch />
            </button>
            <input
              className='form-control'
              type='search'
              name='name'
              placeholder='Search...'
              value={data}
              onChange={handleChange}
              aria-label='Search'
            />
          </form>
        </div>

        <ul className='navbar-nav mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link className='nav-link' aria-current='page' href='/'>
              <ImHome />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' aria-current='page' href='/login'>
              <BiUserCircle />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   getData: (games) => dispatch(searchAction(games)),
// });

// export default connect(null, mapDispatchToProps)(Navbar);
export default Navbar;
