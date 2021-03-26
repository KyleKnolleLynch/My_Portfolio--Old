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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis dignissimos sapiente ab, quam, dolorem et corporis
              vitae maxime, sequi iusto alias laudantium sint quis temporibus
              adipisci assumenda aut non. Eum?
            </p>
          </article>
          <article>
            <h3>What I Learned While Developing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              tempora praesentium quas sed eaque vero ratione ut nulla veritatis
              expedita totam et quae quisquam eos deleniti, perferendis ad
              facere maiores.
            </p>
          </article>
          <article>
            <h3>Interesting Code Snippets</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              assumenda ipsum qui omnis ex nemo, pariatur temporibus vero esse
              recusandae hic aliquid deserunt asperiores id nesciunt iste
              praesentium eligendi a?
            </p>
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
