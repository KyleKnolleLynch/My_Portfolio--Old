import React, { useContext } from 'react'
import { CursorContext } from '../../context/CursorContext'

const ProfileAbout = () => {
  const { setHoveredState } = useContext(CursorContext)
  return (
    <article className='coding-wrap'>
      <div className='vert-line'></div>
      <div
        className='coding-title bio-title coding-line'
        data-line-point='&bull;'
      >
        {'Bio/>'}
      </div>
      <div className='coding-title coding-line' data-line-point='&bull;'>
        {'About/>'}
      </div>

      <div className='coding-line' data-line-num='01'>
        <span className='coding-decs'>const </span>{' '}
        <span className='coding-bright'> Kyle Lynch</span> {'= () => {'}
      </div>
      <div className='coding-line' data-line-num='02'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='03'>
        <div className='dot'>&#8729; &#8729; </div>
        <span className='coding-decs'>let</span>{' '}
        <span className='coding-desc'>webDeveloper</span> = {'{'}
      </div>
      <div className='coding-line' data-line-num='04'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>name: '
        <span className='coding-proper'>Kyle Lynch</span>'
      </div>
      <div className='coding-line' data-line-num='05'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>email:{' '}
        <a
          href='mailto: email@kylelynch.me'
          onMouseEnter={() => setHoveredState(true)}
          onMouseLeave={() => setHoveredState(false)}
        >
          '<span className='coding-proper'>email@kylelynch.me</span>'
        </a>
      </div>
      <div className='coding-line' data-line-num='06'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        currentCity: '<span className='coding-proper'>Austin, TX</span>'
      </div>
      <div className='coding-line' data-line-num='07'>
        <div className='dot'>&#8729; &#8729; </div>
        {'}'}
      </div>
      <div className='coding-line' data-line-num='08'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='09'>
        <div className='dot'>&#8729; &#8729; </div>
        <span className='coding-decs'>const</span>{' '}
        <span className='coding-bright'>skills</span> = (comfortableWith) {'=>'}{' '}
        {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='10'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        <span>
          'HTML5', 'CSS4', 'Javascript', 'React', 'SASS', 'HTTP/REST',
          'FetchAPI', 'Axios', 'Bootstrap', 'Materialize', 'Github'
        </span>
      </div>
      <div className='coding-line' data-line-num='11'>
        <div className='dot'>&#8729; &#8729; </div>
        {'}'}
      </div>
      <div className='coding-line' data-line-num='12'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='13'>
        <div className='dot'>&#8729; &#8729; </div>
        <span className='coding-decs'>const</span>{' '}
        <span className='coding-bright'>otherSkills</span> = (familiarWith){' '}
        {'=>'} {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='14'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        <span>
          'NodeJS', 'Express', 'MongoDB', 'Firebase/Firestore', 'Redux',
          'TailwindCSS', 'Svelte', 'Gimp', 'React Native'
        </span>
      </div>
      <div className='coding-line' data-line-num='15'>
        <div className='dot'>&#8729; &#8729; </div>
        {'}'}
      </div>
      <div className='coding-line' data-line-num='16'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='17'>
        <div className='dot'>&#8729; &#8729; </div>
        <span className='coding-decs'>const</span>{' '}
        <span className='coding-bright'>education</span> =
        (Udemy/YouTubeCoursesBy) {'=>'} {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='18'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        <span>
          'Brad Traversy', 'Stephen Grider', 'The Net Ninja', 'Florin Pop',
          'John Smilga'
        </span>
      </div>

      <div className='coding-line' data-line-num='19'>
        <div className='dot'>&#8729; &#8729; </div>
        {'}'}
      </div>
      <div className='coding-line' data-line-num='20'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='21'>
        <div className='dot'>&#8729; &#8729; </div>
        <span className='coding-decs'>const</span>{' '}
        <span className='coding-bright'>interests</span> = () {'=>'} {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='22'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        'Working on Subarus', 'Ancient History', 'Computer Hardware'
      </div>

      <div className='coding-line' data-line-num='23'>
        <div className='dot'>&#8729; &#8729; </div>
        {'}'}
      </div>
      <div className='coding-line' data-line-num='24'>
        {'}'}
      </div>
      <div
        className='coding-title profile-contact coding-line'
        data-line-point='&bull;'
      >
        {'Contact/>'}
      </div>
    </article>
  )
}

export default ProfileAbout
