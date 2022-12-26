const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Samuel Martinez',
  role: 'Full Stack Engineer',
  description:
    'Full Stack Web Engineer. Expert on React Vue and Laravel. Very familiar with technologies such as Node.js and Docker. A Team-player, fast-learner professional, and looking forward to becoming a Software Engineer that can succeed in the tech industry, always working with the highest quality standards.',
  resume: 'https://example.com',
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
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'Javascript', 'React', 'Material UI'],
    sourceCode: 'https://github.com/sam1330/traveler',
    livePreview: 'https://github.com',
  },
  {
    name: 'Point of sale',
    image: `${process.env.PUBLIC_URL}/assets/point_of_sale.png`,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image: `${process.env.PUBLIC_URL}/assets/traveler.png`,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    image: `${process.env.PUBLIC_URL}/assets/traveler.png`,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
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
