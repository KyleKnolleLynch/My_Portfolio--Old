import React from 'react'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'

const SummaryOne = () => {
  return (
    <div>
      <main className='summary-container'>
        <h1 className='summary-title'>Miami Travel Project</h1>
        <h2 className='summary-subtitle'>Project Synopsis</h2>
        <section>
          <article>
            <h3>Project Goals/Before the Project</h3>
            <p>
              In this project I decided to build a fun, mock travel website that
              would exercise my React skills in a variety of ways. I implemented
              multiple built-in hooks such as useState, useEffect, and useRef,
              as well as using the context api. I used Framer Motion mostly for
              smooth page transitions, but chose to use sass for styling, as I
              wanted to go with pure custom styling for this project, rather
              than using a framework. I've always been intriged by southern
              Florida, so I wanted to showcase the awesome city of Miami in this
              project.
            </p>
          </article>
          <article>
            <h3>During Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              accusantium repellendus nemo fugiat perspiciatis quibusdam soluta
              exercitationem blanditiis? Blanditiis, dolores voluptas. Iure
              voluptatem repudiandae fuga, necessitatibus dolorum, deserunt
              expedita nulla magni perspiciatis dignissimos, alias natus?
            </p>
          </article>
          <article>
            <h3>Cool Code Snippets Used</h3>

            <div className='code-snippet-wrap'>
              <p>
                Here, I used a combination of React hooks and
                IntersectionObserver API for styling, by creating a background
                gradient fade-in effect over a background image when the user
                scrolls past a certain point of the viewport.
              </p>

              <p>
                {' '}
                I used two divs as backgrounds, positioned absolute, to fully
                cover the section's width and height. The first div contains a
                background image. We use useRef to set a reference in the DOM to
                the second div which has a background gradient and an initial
                opacity of zero.
              </p>

              <p>
                {' '}
                We now instantiate the IntersectionObserver inside of the
                useEffect hook to take in and watch a parameter. When that
                parameter is within 500 pixels of the top of the viewport, we
                use useState to then set an opacity state to 0.6. The opacity
                state is passed in as a style property to the div referenced
                with useRef, therefore dynamically changing its opacity based on
                the IntersectionObserver watching the scroll position height of
                the user. This allows the background gradient to appear over the
                already visible background image of the section. A transition
                property is added to give the effect a nice, smooth fade-in.
              </p>

              <p></p>

              <code>
                {`const ref = useRef()`} <br />
                {`const [opacity, setOpacity] = useState(0)`} <br />
                {`const [node, setNode] = useState(null)`} <br />
                <br />
                <br />
                {`useEffect(() => {`} <br />
                &nbsp;&nbsp;{`const observer = new IntersectionObserver(`}{' '}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`([entry]) => {`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`entry.isIntersecting`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`? setOpacity(0.6)`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`: setOpacity(0)`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`},`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`{`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`root: null,`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`rootMargin: '500px 0px 0px 0px',`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`threshold: 0.7,`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`} <br />
                &nbsp;&nbsp;{`)`} <br />
                &nbsp;&nbsp;{`setNode(ref.current)`} <br />
                &nbsp;&nbsp;{`if (node) {`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`observer.observe(node)`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`return () => observer.unobserve(node)`} <br />
                &nbsp;&nbsp;{`}`} <br />
                {`}, [node])`} <br />
                <br />
                <br />
                {`return (`} <br />
                &nbsp;&nbsp;{`<section>`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`<div className='overlay'></div>`}{' '}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`<div`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`className='overlay blended'`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`ref={ref}`} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`style={{ opacity }}`}{' '}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`></div>`} <br />
                {`{/*`}&nbsp;&nbsp;{`Section Content Here...`}&nbsp;&nbsp;
                {`*/}`} <br />
                &nbsp;&nbsp;{`</section`} <br />
                {`)`}
              </code>
            </div>
          </article>
          <article>
            <h3>Take-aways from the Project</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              optio nesciunt quia quidem nam maxime temporibus quaerat.
              Voluptate numquam natus, iure voluptas praesentium itaque, sint
              eveniet dolorum debitis vitae nostrum.
            </p>
          </article>
        </section>
      </main>
      <HomeLink classNames='home-link-bottom-neg-colors' />
      <Copyright />
      <Cursor />
    </div>
  )
}

export default SummaryOne
