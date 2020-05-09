import React from 'react';

const ProfileAbout = () => {
  return (
    <article className='coding-wrap'>
      <div className='vert-line'></div>
      <div className='coding-title coding-line' data-line-point='&bull;'>
        About/>
      </div>
      <br />

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
        <a href='mailto: email@kylelynch.me' className='hover-elem'>
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
        <span className='coding-bright'>skills</span> = (comfortableWith) =>{' '}
        {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='10'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        <span>
          'HTML5', 'CSS4', 'Javascript', 'React', 'JSX', 'SASS', 'HTTP/REST',
          'FetchAPI', 'Axios', 'Bootstrap', 'Materialize', 'Github', 'Service
          Workers'
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
        <span className='coding-bright'>otherSkills</span> = (familiarWith) =>{' '}
        {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='14'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        <span>
          'NodeJS', 'Express', 'MongoDB', 'Firebase/Firestore', 'Redux',
          'React Native', 'Gimp'
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
        <span className='coding-bright'>education</span> = (UdemyCourses) =>{' '}
        {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='18'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        'Modern Javascript from the Beginning by Brad Traversy', 'Modern React
        with Redux by Stephen Grider', 'React Front to Back by Brad Traversy',
        'Updated React Front to Back by Brad Traversy'
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
        <span className='coding-bright'>interests</span> = () => {'{'}
      </div>
      <div className='coding-line coding-data' data-line-num='22'>
        <div className='dot'>&#8729; &#8729; &#8729; &#8729; </div>
        'Working on Subarus and Hondas', 'Ancient History', 'Computer Hardware'
      </div>

      <div className='coding-line' data-line-num='23'>
        <div className='dot'>&#8729; &#8729; </div>
        {'}'}
      </div>
      <div className='coding-line' data-line-num='24'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='25'>
        <div className='dot'>&#8729; &#8729; </div>
        {'return ('}
      </div>
      <div className='coding-line' data-line-num='26'>
        {' '}
      </div>
      <br />

      <div className='coding-line' data-line-num='27'>
        <div className='dot'>&#8729; &#8729; </div>
        {')'}
      </div>
      <div className='coding-line' data-line-num='28'>
        {'}'}
      </div>
      <div className='coding-title bio-title coding-line' data-line-point='&bull;'>
        Bio/>
      </div>
    </article>
  );
};

export default ProfileAbout;
