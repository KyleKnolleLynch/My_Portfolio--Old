import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title1, title2, titleDisabled, linkName, target }) => {
  return (
    <nav>
      <ul>
        <li>
          <span>{titleDisabled}</span>
          <Link to='/' className='nav-link hover-elem'>
            <span className='link-inner'>{title1}</span>
            <div className='link-inner-top'>{title1}</div>
            <div className='link-inner-bottom'>{title1}</div>
          </Link>
        </li>
        <li>
          <Link
            to={linkName}
            className='nav-link hover-elem'
            target={target}
            download
          >
            <span className='link-inner'>
              {title2}
              {linkName === '/myResume.pdf' && (
                <span className='feather-download'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                    <polyline points='7 10 12 15 17 10'></polyline>
                    <line x1='12' y1='15' x2='12' y2='3'></line>
                  </svg>
                </span>
              )}
            </span>
            <div className='link-inner-top'>
              {title2}
              {linkName === '/myResume.pdf' && (
                <span className='feather-download'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                    <polyline points='7 10 12 15 17 10'></polyline>
                    <line x1='12' y1='15' x2='12' y2='3'></line>
                  </svg>
                </span>
              )}
            </div>
            <div className='link-inner-bottom'>
              {title2}
              {linkName === '/myResume.pdf' && (
                <span className='feather-download'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 22 22'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                    <polyline points='7 10 12 15 17 10'></polyline>
                    <line x1='12' y1='15' x2='12' y2='3'></line>
                  </svg>
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  titleDisabled: PropTypes.string,
  linkName: PropTypes.string,
  target: PropTypes.string,
};

export default Navbar;
