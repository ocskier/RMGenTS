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
  ];