import React, { useContext } from 'react'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'
import { CursorContext } from '../../context/CursorContext'

const SummaryTechCart = () => {
  const { setHoveredState } = useContext(CursorContext)
  const list = [
    {
      id: 1,
      text: 'Context API for cart and checkout management',
    },
    {
      id: 2,
      text: 'Commerce.js headless commerce backend',
    },
    {
      id: 3,
      text: 'Styled with TailwindCSS',
    },
    { id: 4, text: 'Multi-step checkout using react-hook-form' },
    {
      id: 5,
      text: 'Image carousel by react-alice-carousel',
    },
  ]
  return (
    <div>
      <main className='summary-container'>
        <h1 className='summary-title'>Techshop Cart</h1>
        <h2 className='summary-subtitle'>Project Summary</h2>
        <section>
          <article>
            <h3>Project Goals</h3>
            <p>
              My goal was to design a simple but great looking mock shopping
              cart with solid UI/UX functionality.
            </p>
          </article>
          <article>
            <h3>Development Process</h3>
            <p>
              I originally built this app with vanilla React, then refactored it
              using Next.js. I felt that if this app was in real world
              production, Next.js would be better suited for an e-commerce app
              like this, especially Next's baked-in search engine optimization
              benefits.
            </p>
            <p>
              I implemented Stripe checkout, but in the end, I created a mock
              checkout confirmation instead. I did this to keep things simple
              for the mock user, saving them from having to enter mock credit
              card info, and kept the main focus on cart functionality. However,
              I commented out the Stripe checkout associated code and left it
              for reference.
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
              Below, is a very neat and simple way to implement a clean-up
              function for asynchronous functions that run inside of useEffect
              hooks using a boolean flag. We do this to prevent unnecessary
              behavior, race conditions, and memory leaks.
            </p>
            <p>
              Because async functions take some time to complete, this clean-up
              function will run a check to permit the async function to finish
              only while the component is mounted. So if the component unmounts,
              say the user quickly leaves the page for example, we will not be
              updating the state on an unmounted component or using stale data.
            </p>

            <div className='code-snippet-wrap'>
              <code>
                <p>JS</p>
                {`useEffect(() => {`} <br />
                &ensp;{`let mounted = true`} <br />
                <br />
                &ensp;{`const generateToken = async () => {`} <br />
                &emsp;{`try {`} <br />
                &ensp;&emsp;
                {`const token = await commerce.checkout.generateToken(id, { type: 'cart' })`}{' '}
                <br />
                &ensp;&emsp;{`setCheckoutToken(token)`} <br />
                &emsp;{`} catch (err) {`} <br />
                &ensp;&emsp;{`router.push('/')`} <br />
                &emsp;{`}`} <br />
                &ensp;{`}`} <br />
                <br />
                &ensp;{`if (mounted) {`} <br />
                &emsp;{`generateToken()`} <br />
                &ensp;{`}`} <br />
                <br />
                &ensp;{`return () => mounted = false`} <br />
                {`}, [])`} <br />
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

export default SummaryTechCart
