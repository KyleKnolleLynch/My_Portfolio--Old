import React from 'react';
import VisibilitySensor from './utils/VisibilitySensor';

const ProfileBio = () => {
  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <div className={isVisible ? 'bio slideUp enter' : 'bio slideUp'}>
          <p>
            Hello, my name is Kyle. I am a front end developer living in Austin
            Texas. I'm very passionate about learning new technologies and
            constantly growing my web development skills. Focus on best modern
            coding practices and clean design for a smooth, clear user
            experience is paramount in my work flow.{' '}
          </p>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default ProfileBio;
