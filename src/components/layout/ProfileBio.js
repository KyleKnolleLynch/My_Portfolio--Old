import React from 'react';
import VisibilitySensor from './utils/VisibilitySensor';

const ProfileBio = () => {
  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <div className={isVisible ? 'bio slideUp enter' : 'bio slideUp'}>
          <p>
            Hello, I'm Kyle. I am a front end developer with a passion for
            learning new technologies and constantly growing my web development
            skills. Becoming an expert full stack developer is one of my goals.
            Challenging myself and learning new things is my way of life. I know
            how to focus on details, time management, and positive interactions
            with people.{' '}
          </p>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default ProfileBio;
