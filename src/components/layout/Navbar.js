import React from 'react';
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

export default Navbar;
