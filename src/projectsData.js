import img1 from './assets/images/projects/blog.webp'
import img2 from './assets/images/projects/miami-travel.webp'
import img3 from './assets/images/projects/inertiaPage.webp'
import img4 from './assets/images/projects/vanilla-js-landing.webp'
import img5 from './assets/images/projects/reactPage.webp'
import img1Vert from './assets/images/projects/blog-vert-lg.webp'
import img2Vert from './assets/images/projects/miami-travel-vert-lg.webp'
import img3Vert from './assets/images/projects/inertia-vert-sm.webp'

import iconJs from './assets/icons/js.svg'
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
    desc: 'My new blog engineered using the Next.js framework of the React library with static generation. Contentful headless CMS is implemented for handling the backend/data storage.',
    summary: '/projectSummaryBlog',
  },
  {
    id: 2,
    title: 'Miami Travel',
    subtitle: 'React',
    img: img2,
    imgVert: img2Vert,
    icon: iconReact,
    link: 'https://miami-travel.netlify.app/',
    gitLink: 'https://github.com/kyleknollelynch/miami-travel',
    desc:
      'Mock Miami travel website using React functional components and hooks. Displays data from weather and livecam APIs. Implements intersection observer to style page sections image backgrounds with gradient overlays. Framer Motion library used for smooth page transitions.',
    summary: '/projectSummaryMiami',
  },
  {
    id: 3,
    title: 'Inertia Welcome Page',
    subtitle: 'Javascript',
    img: img3,
    imgVert: img3Vert,
    icon: iconJs,
    link: 'https://inertiapage.netlify.app',
    gitLink: 'https://github.com/KyleKnolleLynch/Inertia',
    desc:
      "Welcome page built with vanilla Javascript. Background photos from Unsplash API are dynamically displayed to match user's time of day and refresh on page reload. Openweathermap API is utilized to display user's local weather. Random quotes pulled from FavQ API. Impliments local storage, service worker, and fallback local photos for data retention and a smooth user experience. Icons by Font Awesome, weather icons by Deniz Fuchidzhiev.",
  },
  {
    id: 4,
    title: 'Vanilla JS Projects',
    img: img4,
    imgVert: img4,
    icon: iconJs,
    localLink: '/vanillaProjects',
    desc: 'Collection of small projects using vanilla Javascript.',
  },
  {
    id: 5,
    title: 'React Projects',
    img: img5,
    imgVert: img5,
    icon: iconReact,
    localLink: '/reactProjects',
    desc: 'Collection of small projects using the React JS library.',
  },
]
