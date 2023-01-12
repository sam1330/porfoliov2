const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://sam1330.github.io/porfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Samuel Martinez',
  role: 'Full Stack Engineer',
  description:
    'Full Stack Web Engineer. Expert on React Vue and Laravel. Very familiar with technologies such as Node.js and Docker. A Team-player, fast-learner professional, and looking forward to becoming a Software Engineer that can succeed in the tech industry, always working with the highest quality standards.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/samuel-martinez-b742811b4/',
    github: 'https://github.com/sam1330',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Traveler',
    image: `${process.env.PUBLIC_URL}/assets/traveler.png`,
    description:
      'This is a simple React App built with Material UI integrating Google maps to show Points of interest around you such as Hotels, Restaurants and Attractions',
    stack: ['Javascript', 'React', 'Material UI', 'Google Maps API'],
    sourceCode: 'https://github.com/sam1330/traveler',
    livePreview: 'https://sam1330.github.io/traveler',
  },
  {
    name: 'Point of sale',
    image: `${process.env.PUBLIC_URL}/assets/point_of_sale.png`,
    description:
      'This is a basic POS template built with React, Inertia, TypeScript and Laravel. It has Users, Customers, Inventory, Dashboard, POS, and Employees modules',
    stack: ['TypeScript', 'React', 'Laravel', 'Inertia', 'Material UI'],
    sourceCode: 'https://github.com/sam1330/Point_of_sale_Template',
    // livePreview: 'https://github.com/sam1330/Point_of_sale_Template',
  },
  {
    name: 'Telegram ChatBot',
    image: `${process.env.PUBLIC_URL}/assets/telegram.png`,
    description:
      'This is a chatbot made with Python, Tensorflow, NLTK and AI. the purpose of the chatbot is work as an automated sells representative, some of the features are: ask questions about the company, buy items and receive info about your previous purchases',
    stack: ['Python', 'Tensorflow', 'NLTK', 'Machine learning', 'Telegram API', 'MySql'],
    sourceCode: 'https://github.com/sam1330/AI_Project',
    // livePreview: 'https://github.com',
  },
  // {
  //   name: 'Project 3',
  //   image: `${process.env.PUBLIC_URL}/assets/traveler.png`,
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   // livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Vue',
  'React',
  'Lavarel',
  'MySQL',
  'SQL Server',
  'Bootstrap',
  'Material UI',
  'Git',
  'GitHub',
  'CI/CD',
  'Jest',
  'Enzyme',
  'Tenting Library',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sammy1301m@gmail.com',
}

export { header, about, projects, skills, contact }
