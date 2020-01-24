import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/Navbar';
import ProfileImg from '../../assets/images/portrait1.jpg';


const banner1 = document.querySelector('.profile-banner-1');

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
})

observer.observe(banner1)


const About = () => {
  return (
    <div>
      <header>
        <Navbar title1='Home' title2='other' linkName='/other' />
      </header>
      <main className='profile-main'>
        <section className='section profile-section-1'>
          <div className='profile-img-div'>
            <img src={ProfileImg} alt='profile' />
          </div>
          <div className='profile-banner-1 banner'>
            <div>HelloHelloHelloHelloHello</div>
          </div>
          <div className='profile-banner-2 banner'>
            <div>HelloHelloHelloHelloHello</div>
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

export default About;
