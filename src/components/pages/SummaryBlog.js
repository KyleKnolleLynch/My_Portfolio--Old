import React, { useContext } from 'react'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'
import { CursorContext } from '../../context/CursorContext'

const SummaryBlog = () => {
  const { setHoveredState } = useContext(CursorContext)
  const list = [
    {
      id: 1,
      text: 'Static page generation',
    },
    {
      id: 2,
      text: 'Incremental static regeneration',
    },
    {
      id: 3,
      text: 'Preloaded fonts and images for content above the fold',
    },
    { id: 4, text: 'Fully optimized images with Next.js image component' },
    {
      id: 5,
      text:
        'Great search engine optimization via pre-rendered HTML and meta tags',
    },
  ]
  return (
    <div>
      <main className='summary-container'>
        <h1 className='summary-title'>My Blog</h1>
        <h2 className='summary-subtitle'>Project Synopsis</h2>
        <section>
          <article>
            <h3>Project Goals</h3>
            <p>
              My plan was to create a blog for a user that would be easy for
              them to add or delete their own content as needed, as well as look
              nice, clean, and be responsive. I felt Next.js and a headless
              content management system would be an ideal choice for this use
              case. In the example demo shown, I showcase a version built for my
              own personal use.
            </p>
          </article>
          <article>
            <h3>Development Process</h3>
            <p>
              Building out the front end UI was made fun and straighforward with
              the power of Next.js. The headless CMS I chose to use is
              Contentful, as the rich text editor, image uploader, and overall
              data input system is very user friendly. This is important if I
              engineer this project for a blogger that isn't proficient in
              coding or knowledgeable in markdown language.
            </p>

            <p>
              By using SSG {`(static site generation)`} with Next.js, fully
              rendered HTML pages are served from the server to the client side,
              along with meta tags, greatly improving SEO performance for the
              blog site. And by using the 'revalidate' prop from Next.js, a
              cached version of the site is served and behind the scenes Next
              rebuilds only sections that have been changed, say by the blogger
              updating posts in Contentful CMS, then a fresh up-to-date version
              is served and cached. This is incremental static regeneration and
              it generates new pages and regenerates current pages when any data
              is updated. 
            </p>
            <p>
              This is great for allowing a blogger to make content changes and
              keep their blog updated, without having to manually redeploy the
              site's code.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsa rem ullam obcaecati quos! Inventore nemo commodi mollitia
              beatae nostrum.
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
          </article>
          <article>
            <h3>Take-aways from the Project</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae excepturi laboriosam atque cumque. Corporis animi ea
              itaque excepturi accusamus exercitationem!
            </p>

            <p>If you made it this far, thanks for reading!</p>
          </article>
        </section>
        <p className='summary-link-prompt'>Check out the project {`:)`}</p>
        <div className='summary-links'>
          <a
            href='https://kylelynch-blog.vercel.app/'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Demo
          </a>

          <a
            href='https://github.com/kyleknollelynch/my_contentful_blog'
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

export default SummaryBlog
