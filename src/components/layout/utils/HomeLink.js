import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => {
  return (
    <article className='home-link-bottom'>
      <Link to='/' className='hover-elem'>
        Go Back
      </Link>
    </article>
  );
};

export default HomeLink;
