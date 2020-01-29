import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href='https://github.com/KyleKnolleLynch' className='nav-link'>
            <span className='link-inner'>GH</span>
            <div className='link-inner-top'>GH</div>
            <div className='link-inner-bottom'>GH</div>
          </a>
        </li>
        <li>
          <a href='https://github.com/KyleKnolleLynch' className='nav-link'>
            <span className='link-inner'>TW</span>
            <div className='link-inner-top'>TW</div>
            <div className='link-inner-bottom'>TW</div>
          </a>
        </li>
        <li>
          <a href='https://codepen.io/kyleknollelynch' className='nav-link'>
            <span className='link-inner'>CP</span>
            <div className='link-inner-top'>CP</div>
            <div className='link-inner-bottom'>CP</div>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
