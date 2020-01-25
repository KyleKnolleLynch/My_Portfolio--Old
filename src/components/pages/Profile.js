import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../layout/sketch';
import Navbar from '../layout/Navbar';
import ProfileImg from '../../assets/images/portrait1.jpg';

const Profile = () => {
  let options = {
    root: null,
    rootMargin: '-10px',
    threshold: 0
  };

  const banner1 = document.querySelector('.hello1');
  const banner2 = document.querySelector('.hello2');
  const section2 = document.querySelector('.profile-section-2');

  let observer = new IntersectionObserver(entries => {
    console.log(entries);

    if (entries[0].intersectionRatio > 0) {
      banner1.style.animation = 'shiftLeft 1s both ease-in-out';
      banner2.style.animation = 'shiftRight 1s both ease-in-out ';
    } else {
      banner1.style.animation = 'shiftRight 1s both ease-in-out';
      banner2.style.animation = 'shiftLeft 1s both ease-in-out';
    }
  }, options);

  let target = section2;

  if (target) {
    observer.observe(target);
  }

  /* p5 */

  // const setup = (p5, parent) => {
  //   canvas = p5.createCanvas(window.outerWidth, window.outerHeight).parent(parent);
  //   canvas.position(0, 0);
  //   canvas.style('z-index', '3');
  // };

  //      // Position
  //     let pos = createVector(random(width), random(height));
  //     //  Size
  //     let size = 10;

  //   const draw = (p5) => {
  //     p5.circle(pos.x, pos.y, size);
  //   }


  const [color, setColor] = useState('transparent');


  return (
    <div className='profile-container'>
      <P5Wrapper sketch={sketch} color={color}></P5Wrapper>
      <header>
        <Navbar title1='Home' title2='other' linkName='/other' />
      </header>
      <main className='profile-main'>
        <section className='section profile-section-1'>
          <div className='profile-img-div'>
            <img src={ProfileImg} alt='profile' />
          </div>
          <div className='profile-banner-1 banner'>
            <div className='hello1'>HelloHelloHelloHelloHello</div>
          </div>
          <div className='profile-banner-2 banner'>
            <div className='hello2'>HelloHelloHelloHelloHello</div>
          </div>

          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={isVisible ? 'scroll-div hidden' : 'scroll-div'}>
                <p>SCROLL</p>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='section profile-section-2'>
          <h1>My Profile</h1>
          <br />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            provident culpa perferendis quos et cupiditate laborum architecto,
            maxime veniam vitae voluptas rerum, voluptatem distinctio accusamus
            non molestias at? Maxime illo nihil sunt ad fugiat tempora similique
            quae, eveniet unde magni laboriosam blanditiis et? Dolor dolore quod
            molestiae distinctio in laudantium?
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
