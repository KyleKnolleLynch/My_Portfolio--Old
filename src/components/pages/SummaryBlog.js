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
              will detect any changes made and rebuild only sections that have
              been changed, say by the blogger updating posts in Contentful CMS,
              then a fresh up-to-date version is served and cached. This is
              incremental static regeneration, it generates new pages and
              regenerates current pages on the fly when any data is updated.
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
              Here is a fairly simple but effective way to implement a 'show
              more' functionality to initially display only a certain number of
              blog posts on the homepage, then as the reader scrolls down the
              page and clicks a 'show more' button, a set number of additional
              posts will be shown. This can be repeated until all of the posts
              are displayed, then the button will cease to appear.
            </p>

            <p>
              We've received all blog posts from Contentful CMS through the
              Next.js getStaticProps function and set them to a variable named
              articles. Now we pass them as props into our homepage component,
              named Articles in this case, shown below. We then utilize useState
              to keep track of and update our number of articles we want to be
              visible.
            </p>

            <p>
              We map through our articles and pass them as props into our
              premade ArticleCard component, which displays each article on its
              own card. But before we map them, we use the slice method to
              display only the number we set with our 'visible' useState state.
            </p>

            <p>
              We then use a conditional to check if our 'visible' useState count
              is less than our total articles count, if so, the 'show more'
              button is rendered. This ensures our button will show if there are
              more articles to be loaded, and if all articles are shown, our
              button will not be rendered.
            </p>

            <div className='code-snippet-wrap'>
              <code>
                <p>JS & JSX</p>
                {`export default function Articles({ articles, ...otherProps }) {`}{' '}
                <br />
                &ensp;{`const [visible, setVisible] = useState(4)`} <br />
                &ensp;{`const showMoreItems = () => {`} <br />
                &emsp;
                {`visible < articles.length && setVisible(prev => prev + 4)`}{' '}
                <br />
                &ensp;{`}`} <br />
                <br />
                &ensp;{`return (`} <br />
                &emsp;{`<>`} <br />
                &emsp;&ensp;{`// more code here...`} <br />
                <br />
                &emsp;{`{articles.slice(0, visible).map(article => (`} <br />
                &emsp;&ensp;
                {`<ArticleCard key={article.sys.id} article={article} />`}{' '}
                <br />
                &emsp;{`))}`} <br />
                &emsp;{`{visible < articles.length && (`} <br />
                &emsp;&ensp;
                {`<button onClick={showMoreItems} className='showMore-btn'>`}{' '}
                <br />
                &emsp;&emsp;{`Show More`} <br />
                &emsp;&ensp;{`</button>`} <br />
                &emsp;{`)}`} <br />
                <br />
                &emsp;&ensp;{`// more code here...`} <br />
                &emsp;{`</>`} <br />
                &ensp;{`)`} <br />
                {`}`}
              </code>
            </div>

            <p>
              When a reader clicks the 'show more' button, a function is fired
              wherein we have another conditional set to ensure our useState
              count never exceeds or equals the total number of articles, this
              ensures our button never renders if the total number of articles
              are displayed. If that conditional is passed, we take the previous
              count in our 'visible' useState state and add a set number to it,
              in this case 4.
            </p>

            <p>
              Since we are pumping in the 'visible' state count as a parameter
              into our slice method before we use the map method on the
              articles, we control the number of articles additionally displayed
              each time a reader clicks the 'show more' button. Now we have the
              proper behavior desired and a cool UI feature for our blog.
            </p>
          </article>
          <article>
            <h3>Take-aways from the Project</h3>
            <p>
              My biggest take-away here is how powerful and absolutly awesome
              Next.js is. I believe it's the cutting edge of Javascript/React
              frameworks and even front-end development in general. Next's
              static site generation seems to be ideal for a blog like this
              project. I feel the Next image component would greatly benefit a
              blogger as they could upload non-optimized images to the CMS and
              Next image component will automatically optimize the images for
              the web without the blogger having to worry about it. The SEO
              optimizations and outright speed/low latency of a Next site is
              fantastic as well. I look forward to learning much more about
              Next.js and working with it as much as possible in the future.
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
