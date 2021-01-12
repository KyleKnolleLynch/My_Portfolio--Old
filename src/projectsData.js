import img1 from './assets/images/projects/vanilla-js-landing.webp'
import img2 from './assets/images/projects/reactPage.webp'
import img3 from './assets/images/projects/inertiaPage.webp'
import img4 from './assets/images/projects/glitchLog.webp'
import img5 from './assets/images/projects/birders-journal.webp'
import img6 from './assets/images/projects/miami-travel.webp'

import img3Vert from './assets/images/projects/inertia-vert-sm.webp'
import img4Vert from './assets/images/projects/glitchLog-light.webp'
import img6Vert from './assets/images/projects/miami-travel-vert.webp'

import iconJs from './assets/icons/js.svg'
import iconReact from './assets/icons/react.svg'

export const projectsData = [
  {
    id: 1,
    title: 'Vanilla JS Projects',
    img: img1,
    imgVert: img1,
    icon: iconJs,
    link: '/vanillaProjects',
    desc: 'Collection of small projects using vanilla Javascript.',
  },
  {
    id: 2,
    title: 'React Projects',
    img: img2,
    imgVert: img2,
    icon: iconReact,
    link: '/reactProjects',
    desc: 'Collection of small projects using the React JS library.',
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
    title: 'Game Glitch Log',
    subtitle: 'React',
    img: img4,
    imgVert: img4Vert,
    icon: iconReact,
    link: 'https://kyleknollelynch.github.io/game-glitch-log',
    gitLink: 'https://github.com/KyleKnolleLynch/game-glitch-log',
    desc:
      'Game method/glitch log PWA using context API, hooks, and local storage. Toggleable light/dark theme.',
  },
  {
    id: 5,
    title: "Birder's Journal",
    subtitle: 'Javascript',
    img: img5,
    imgVert: img5,
    icon: iconJs,
    link: 'https://birders-journal.web.app',
    gitLink: 'https://github.com/KyleKnolleLynch/birders-journal',
    desc:
      'Progressive web app built with vanilla Javascript using Firebase/Firestore for the database. This app adds, stores, and deletes data entered by user about birding activites. Admin functionality used to add or delete other admins or users/data. Materialize and Material Icons used for styling.',
  },
  {
    id: 6,
    title: 'Miami Travel',
    subtitle: 'React',
    img: img6,
    imgVert: img6Vert,
    icon: iconReact,
    link: 'https://miami-travel.netlify.app/',
    gitLink: 'https://github.com/kyleknollelynch/miami-travel',
    desc:
      'Mock Miami travel website using functional components and hooks. Displays data from weather and livecam APIs. Implements intersection observer to style page sections image backgrounds with gradient overlays. Framer motion used for smooth react-router link transitions. Header image carousel built without frameworks.',
  },
]
