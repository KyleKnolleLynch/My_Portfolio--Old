import React, { useContext } from 'react'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'
import { CursorContext } from '../../context/CursorContext'

const SummaryTechshop = () => {
  const { setHoveredState } = useContext(CursorContext)
  const list = [
    {
      id: 1,
      text: 'Code splitting components with React lazy loading and suspense',
    },
    {
      id: 2,
      text: 'Image carousel using React hooks and javascript only, no css libraries/frameworks',
    },
    {
      id: 3,
      text: 'HTTP fetch requests to Openweather API for live weather data and Windy API for livecams/timelapse data',
    },
    { id: 4, text: '<iframe> and <video> elements' },
    {
      id: 5,
      text: '<picture> elements for displaying different images for different screen sizes, improving performance',
    },
    { id: 6, text: 'Lazy loading all images and video/iframe elements' },
  ]
  return (
    <div>
      <main className='summary-container'>
        <h1 className='summary-title'>Techshop Cart</h1>
        <h2 className='summary-subtitle'>Project Synopsis</h2>
        <section>
          <article>
            <h3>Project Goals</h3>
            <p>P</p>
          </article>
          <article>
            <h3>Development Process</h3>
            <p>P</p>
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
            <p>P</p>

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
          </article>
          <article>
            <h3>Take-aways from the Project</h3>
            <p>P</p>

            <p>If you made it this far, thanks for reading!</p>
          </article>
        </section>
        <p className='summary-link-prompt'>Check out the project {`:)`}</p>
        <div className='summary-links'>
          <a
            href='https://techshopv1.herokuapp.com'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Demo
          </a>

          <a
            href='https://github.com/kyleknollelynch/techshop'
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

export default SummaryTechshop
