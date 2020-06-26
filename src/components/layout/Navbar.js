import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title1, title2, titleDisabled, linkName }) => {
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
          <Link to={linkName} className='nav-link hover-elem'>
            <span className='link-inner'>{title2}</span>
            <div className='link-inner-top'>{title2}</div>
            <div className='link-inner-bottom'>{title2}</div>
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
};

export default Navbar;
