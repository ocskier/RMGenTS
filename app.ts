const fs = require('fs');
const util = require('util');

const axios = require('axios');
const inquirer = require('inquirer');

const generator = require('./util/generator');

const writeFileAsync = util.promisify(fs.writeFile);

const readmeQues = [
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
    type: 'list',
    name: 'license',
    message: 'License?',
    choices: ['MIT', 'Apache'],
    default: 'MIT',
  },
];

const init = async () => {
  try {
    const answers = await inquirer.prompt(readmeQues);
    const { data } = await axios.get(
      `https://api.github.com/users/${answers.githubId}`
    );
    answers.pic = data.avatar_url;
    await writeFileAsync('Readme.md', generator(answers));
    console.log('\nReadme written!\n');
  } catch (err) {
    console.log(`Your error was: ${err}`);
  }
};

init();
