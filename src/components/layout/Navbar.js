import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title1, title2, linkName }) => {
  return (
      <nav>
        <ul>
          <li>
            <a href='/'>{title1}</a>
          </li>
          <li>
            <Link to={linkName}>{title2}</Link>
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
