import img1 from './assets/images/projects/vanilla-js-landing.png';
import img2 from './assets/images/projects/reactPage.png';
import img3 from './assets/images/projects/inertiaPage.jpg';
import img4 from './assets/images/projects/glitchLog.png';
import img5 from './assets/images/projects/birders-journal.png';
import img6 from './assets/images/projects/tours.jpg';

import img3Vert from './assets/images/inertia-vert-sm.png';
import img4Vert from './assets/images/projects/glitchLog-light.png';
import img6Vert from './assets/images/projects/toursVert.jpg';

import iconJs from './assets/icons/js.svg';
import iconReact from './assets/icons/react.svg';

export const projectsData = [
  {
    id: 1,
    title: 'Vanilla JS Projects',
    img: img1,
    icon: iconJs,
    link: '/vanillaProjects',
    desc: 'Collection of small projects using vanilla Javascript.',
  },
  {
    id: 2,
    title: 'React Projects',
    img: img2,
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
    icon: iconJs,
    link: 'https://birders-journal.web.app',
    gitLink: 'https://github.com/KyleKnolleLynch/birders-journal',
    desc:
      'Progressive web app built with vanilla Javascript using Firebase/Firestore for the database. This app adds, stores, and deletes data entered by user about birding activites. Admin functionality used to add or delete other admins or users/data. Materialize and Material Icons used for styling.',
  },
  {
    id: 6,
    title: 'Central Texas Tours',
    subtitle: 'React',
    img: img6,
    imgVert: img6Vert,
    icon: iconReact,
    link: 'https://central-texas-tours.netlify.app/',
    gitLink: 'https://github.com/KyleKnolleLynch/central-texas-tours',
    desc:
      'Mock local tours website using functional components with hooks. Allows user to filter through and delete tours from view. Includes multi-step form with native validation. Styled with Sass and Font Awesome icons.',
  },
];
