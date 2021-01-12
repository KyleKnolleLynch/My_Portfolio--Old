import React from 'react'
import VisibilitySensor from './utils/VisibilitySensor'

const ProfileBio = () => {
  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <div className={`bio slideUp ${isVisible && 'enter'}`}>
          <p>
            Hello, my name is Kyle. I am a front end developer living in Austin
            Texas. I'm very passionate about learning new technologies and
            constantly growing my web development skills. My current focus is
            the Javascript ecosystem. Writing efficient, readable, and
            maintainable code that provides an enjoyable user experience makes
            me happy; So does coffee.
          </p>
        </div>
      )}
    </VisibilitySensor>
  )
}

export default ProfileBio
