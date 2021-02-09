module.exports = [
  {
    name: 'githubId',
    message: 'Whats your Github username?',
    validate: (val: string) => {
      if (val) {
        return true;
      } else return 'No entry!';
    },
  },
  {
    name: 'title',
    message: 'Title?',
  },
  {
    name: 'description',
    message: 'Description?',
    default:
      'A Node JS application that asks the user questions and generates a GH repo readme file',
  },
  {
    type: 'checkbox',
    name: 'prereq',
    message: 'Prerequisite Applications?',
    choices: ['NodeJS', 'MongoDB', 'MySQL'],
    default: ['NodeJS'],
  },
  {
    name: 'installDirections',
    message: 'Directions?',
    default: 'Use Node JS command line to install packages',
  },
  {
    name: 'installCmd',
    message: 'Install Command?',
    default: 'npm i',
  },
  {
    name: 'usage',
    message: 'Any Usage Commands?',
    default: 'npm run start',
  },
  {
    name: 'testing',
    message: 'Test Command?',
    default: 'npm run test',
  },
  {
    name: 'deploy',
    message: 'Where is it deployed?',
    default: 'GH-Pages',
  },
  {
    name: 'authors',
    message: 'Authors?',
    default: 'Jon Jackson',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License?',
    choices: ['MIT', 'Apache'],
    default: 'MIT',
  },
  {
    name: 'pathToRepo',
    type: 'fuzzypath',
    message: 'Path?',
    default: './',
    excludePath: (nodePath: string) => nodePath.startsWith('node_modules'),
    excludeFilter: (nodePath: string) => nodePath == '.',
    itemType: 'directory',
    // Change the path below to ./ if you want the Readme in the current folder 
    // or use the path to your code projects folder
    rootPath: '../../Bootcamp',
    suggestOnly: false,
    depthLimit: 0,
  },
];
