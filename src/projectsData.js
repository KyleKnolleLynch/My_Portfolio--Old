import img1 from './assets/images/projects/blog.webp'
import img2 from './assets/images/projects/tech-cart.webp'
import img3 from './assets/images/projects/miami-travel.webp'

import img1Vert from './assets/images/projects/blog-vert-lg.webp'
import img2Vert from './assets/images/projects/tech-cart-vert-lg.webp'
import img3Vert from './assets/images/projects/miami-travel-vert-lg.webp'

import iconJs from './assets/icons/js.svg'
import iconJsAlt from './assets/icons/javascript_alt.svg'
import iconReact from './assets/icons/react.svg'

export const projectsData = [
  {
    id: 1,
    title: 'My Blog',
    subtitle: 'React/Next.js',
    img: img1,
    imgVert: img1Vert,
    icon: iconReact,
    link: 'https://kylelynch-blog.vercel.app',
    gitLink: 'https://github.com/KyleKnolleLynch/my_contentful_blog',
    desc: 'My new blog engineered using the Next.js framework for the React library with static generation. Contentful headless CMS is implemented for handling the backend/data storage and adding blog content.',
    summary: '/projectSummaryBlog',
  },
  {
    id: 2,
    title: 'Tech Cart',
    subtitle: 'React/Next.js',
    img: img2,
    imgVert: img2Vert,
    icon: iconReact,
    link: 'https://next-tech-cart.vercel.app',
    gitLink: 'https://github.com/KyleKnolleLynch/next-tech-cart',
    desc: 'E-commerce shopping cart for a mock tech shop. Frontend constructed with Next.js, along with Commerce.js headless commerce backend, and styled with TailwindCSS.',
    summary: '/projectSummaryTechCart',
  },
  {
    id: 3,
    title: 'Miami Travel',
    subtitle: 'React',
    img: img3,
    imgVert: img3Vert,
    icon: iconReact,
    link: 'https://miami-travel.netlify.app/',
    gitLink: 'https://github.com/kyleknollelynch/miami-travel',
    desc: 'Mock Miami travel website using React functional components and hooks. Displays data from weather and livecam APIs. Implements intersection observer to style page sections image backgrounds with gradient overlays. Framer Motion library used for smooth page transitions.',
    summary: '/projectSummaryMiami',
  },
  {
    id: 4,
    title: 'Vanilla JS Projects',
    imgVert: iconJsAlt,
    icon: iconJs,
    localLink: '/vanillaProjects',
    desc: 'Collection of small projects using vanilla Javascript.',
  },
  {
    id: 5,
    title: 'React Projects',
    imgVert: iconReact,
    icon: iconReact,
    localLink: '/reactProjects',
    desc: 'Collection of small projects using the React JS library.',
  },
]
