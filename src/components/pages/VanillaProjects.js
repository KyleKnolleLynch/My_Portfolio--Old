import React from 'react';
import { Link } from 'react-router-dom';
import { vanillaData } from '../../vanillaData';
import VanillaCard from '../layout/VanillaCard';
import Copyright from '../layout/Copyright';
import Cursor from '../layout/utils/Cursor';

const VanillaProjects = () => {
  return (
    <div>
      <main className='vanilla-main'>
        <section id='vanilla-section-1'>
          <h1>Vanilla Javascript Projects</h1>
        </section>
        <section id='vanilla-section-2'>
          <div className='vanilla-grid'>
            {vanillaData.map((project) => (
              <VanillaCard project={project} key={project.title} />
            ))}
          </div>
        </section>
        <article className='home-link-bottom'>
          <Link to='/' className='hover-elem'>
           Go Home
          </Link>
        </article>
        <Copyright color='#000' />
      </main>
      <Cursor />
    </div>
  );
};

export default VanillaProjects;
