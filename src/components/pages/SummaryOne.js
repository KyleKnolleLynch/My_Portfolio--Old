import React, { useContext } from 'react'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'
import { CursorContext } from '../../context/CursorContext'

const SummaryOne = () => {
  const { setHoveredState } = useContext(CursorContext)
  const list = [
    {
      id: 1,
      text: 'Code splitting components with React lazy loading and suspense',
    },
    {
      id: 2,
      text:
        'Image carousel using React hooks and javascript only, no css libraries/frameworks',
    },
    {
      id: 3,
      text:
        'HTTP fetch requests to Openweather API for live weather data and Windy API for livecams/timelapse data',
    },
    { id: 4, text: '<iframe> and <video> elements' },
    {
      id: 5,
      text:
        '<picture> elements for displaying different images for different screen sizes, improving performance',
    },
    { id: 6, text: 'Lazy loading all images and video/iframe elements' },
  ]
  return (
    <div>
      <main className='summary-container'>
        <h1 className='summary-title'>Miami Travel Project</h1>
        <h2 className='summary-subtitle'>Project Synopsis</h2>
        <section>
          <article>
            <h3>Project Goals</h3>
            <p>
              In this project, I decided to build a mock travel website that
              would exercise my React skills in a variety of ways. I implemented
              multiple React hooks such as useState, useEffect, and useRef for
              data manipulation as well as styling. I used the Framer Motion
              animation library mostly for smooth page transitions, but chose to
              use sass for styling, as I wanted to go with pure custom styling
              for this project rather than using a framework. I've always been
              intriged by southern Florida, so I wanted to showcase the awesome
              city of Miami in this project.
            </p>
          </article>
          <article>
            <h3>Development Process</h3>
            <p>
              I wanted the application to have solid functionality and a really
              good look, and at the same time I focused very hard on performance
              optimization. Listed below are some of the features I implemented.
            </p>
            <ul>
              {list.map(item => (
                <li key={item.id}>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <polyline points='20 6 9 17 4 12'></polyline>
                    </svg>
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Interesting Code Snippets</h3>
            <p>
              Here, I used a combination of React hooks and IntersectionObserver
              API for styling, by creating a background gradient fade-in effect
              over a background image when the user scrolls past a certain point
              of the viewport.
            </p>

            <p>
              I used two divs as backgrounds, positioned absolute, to fully
              cover the section's width and height. The first div contains a
              background image. We use useRef to set a reference in the DOM to
              the second div which has a background gradient and an initial
              opacity of zero.
            </p>

            <div className='code-snippet-wrap'>
              <code>
                <p>JS & JSX</p>
                {`const ref = useRef()`} <br />
                {`const [opacity, setOpacity] = useState(0)`} <br />
                {`const [node, setNode] = useState(null)`} <br />
                <br />
                <br />
                {`useEffect(() => {`} <br />
                &ensp;{`const observer = new IntersectionObserver(`} <br />
                &emsp;{`([entry]) => {`} <br />
                &ensp;&emsp;
                {`entry.isIntersecting`} <br />
                &ensp;&emsp;{`? setOpacity(0.6)`} <br />
                &ensp;&emsp;{`: setOpacity(0)`} <br />
                &emsp;{`},`} <br />
                &emsp;{`{`} <br />
                &ensp;&emsp;{`root: null,`} <br />
                &ensp;&emsp;
                {`rootMargin: '500px 0px 0px 0px',`} <br />
                &ensp;&emsp;{`threshold: 0.7,`} <br />
                &emsp;{`}`} <br />
                &ensp;{`)`} <br />
                &ensp;{`setNode(ref.current)`} <br />
                &ensp;{`if (node) {`} <br />
                &emsp;{`observer.observe(node)`} <br />
                &emsp;
                {`return () => observer.unobserve(node)`} <br />
                &ensp;{`}`} <br />
                {`}, [node])`} <br />
                <br />
                <br />
                {`return (`} <br />
                &ensp;{`<section>`} <br />
                &emsp;{`<div className='overlay'></div>`} <br />
                &emsp;{`<div`} <br />
                &ensp;&emsp;
                {`className='overlay blended'`} <br />
                &ensp;&emsp;{`ref={ref}`} <br />
                &ensp;&emsp;{`style={{ opacity }}`} <br />
                &emsp;{`></div>`} <br />
                {`{/*`}&ensp;{`Section Content Here...`}&nbsp;&nbsp;
                {`*/}`} <br />
                &ensp;{`</section`} <br />
                {`)`}
              </code>

              <code>
                <p>CSS</p>
                {`.overlay {`} <br />
                &ensp;{`width: 100%;`} <br />
                &ensp;{`height: 100%;`} <br />
                &ensp;{`position: absolute;`} <br />
                &ensp;{`top: 0;`} <br />
                &ensp;{`left: 0;`} <br />
                &ensp;{`background: url`} <br />
                &ensp;{`('../images/example_image.webp')`} <br />
                &ensp;{`no-repeat center center / cover;`} <br />
                {`}`} <br />
                <br />
                {`.overlay.blended {`} <br />
                &ensp;{`background: linear-gradient`} <br />
                &ensp;{`(to bottom right,`} <br />
                &ensp;{`rgb(255, 110, 57),`} <br />
                &ensp;{`rgb(46, 0, 130));`} <br />
                &ensp;{`transition: opacity 500ms ease;`} <br />
                {`}`}
              </code>
            </div>

            <p>
              We now instantiate the IntersectionObserver inside of the
              useEffect hook to take in and watch a parameter. By setting the
              root margin of the observer, it will detect when said parameter is
              within, in this case, 500 pixels of the top of the viewport. We
              then use useState to set an opacity state, in this case, 0.6. The
              opacity state is passed in as a style property to the div
              referenced with useRef, therefore dynamically changing its opacity
              based on the observer intersecting with the predefined scroll
              position height of the user. This allows the background gradient
              to appear or disappear over the already visible background image
              of the section. A transition property is added to give the effect
              a nice, smooth fade-in.
            </p>

            <p>
              There is a catch with passing in the ref directly as the parameter
              to the observer, however. Since useRef has a mutable current
              object property and React will not trigger a rerender when that
              current property is mutated, we will not get our desired behavior.
              If subsequent rerenders occur, like a user navigating to a
              different page then returning for instance, our ref will get
              recreated and not keep its current instance value. So we use
              useState to update the state value directly by passing the
              setState function as a callback to the ref object. This will
              ensure a rerender and keep our ref's current object instance fresh
              and up to date. Now we get the behavior we want with the observer,
              and when we run the return clean up function to stop the observer
              when the component unmounts, everything works correctly, ensuring
              good performance.
            </p>

            <p>
              Using this technique, we do need to run a null check on the
              useState value containing the current ref instance, in this case
              we named it node, because ref objects and useState work on
              different lifecycles.{' '}
            </p>

            <p>
              I think this is a very cool way of styling a section of content
              using React and the IntersectionObserver, and works quite well for
              this application. I have seen other, possibly ideal, techniques to
              create a custom hook that returns a ref object, that triggers a
              rerender upon mutating its current property. But that is more
              complicated and I feel is beyond the scope of what is needed here
              in this application.
            </p>
          </article>
          <article>
            <h3>Take-aways from the Project</h3>
            <p>
              The main thing I learned from this project is to absolutely
              understand and keep track of the freshness of your state in React.
              Using and keeping the most up-to-date data is critical in letting
              React function properly as it was/is designed to do. Dealing with
              out of date iterations of state can and will quickly cause
              problems.
            </p>
            <p>
              I chose to locally host a very high number of images and even
              video files in this project, something I would probably not do in
              a production app. A third party host for image uploading would be
              a better solution for that case to keep the app file size low, and
              improve performance, such as initial loading time. That being
              said, I learned a lot about optimizing images to improve
              performance, while keeping good browser support. Proper sizing,
              proper formats, use of the {`<picture>`} element with different
              source images, and video encoding using Handbrake all were
              utilized to optimize performace by saving bandwidth and decreasing
              load speeds.
            </p>
            <p>
              Building this project was very fun, and I gained a lot of
              real-world, applicable, general modern web devolopment as well as
              React, Javascript, and sass/css knowledge in the process.
            </p>
            <p>If you made it this far, thanks for reading!</p>
          </article>
        </section>
        <p className='summary-link-prompt'>Check out the project {`:)`}</p>
        <div className='summary-links'>
          <a
            href='https://miami-travel.netlify.app/'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Demo
          </a>

          <a
            href='https://github.com/kyleknollelynch/miami-travel'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Code
          </a>
        </div>
      </main>
      <HomeLink classNames='home-link-bottom-neg-colors' />
      <Copyright />
      <Cursor />
    </div>
  )
}

export default SummaryOne
