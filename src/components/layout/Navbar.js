import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title1, title2, linkName }) => {
  return (
      <nav>
        <ul>
          <li>
            <Link to='/' className='ping'>{title1}</Link>
          </li>
          <li>
            <Link to={linkName} className='ping'>{title2}</Link>
          </li>
        </ul>
      </nav>
  );
};

Navbar.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  linkName: PropTypes.string
};

export default Navbar;
