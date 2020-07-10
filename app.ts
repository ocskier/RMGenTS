const fs = require('fs');
const util = require('util');

const axios = require('axios');
const inquirer = require('inquirer');

const generator = require('./util/generator');

const writeFileAsync = util.promisify(fs.writeFile);

const init = async () => {
  try {
    const answers = await inquirer.prompt({ name: 'msg', message: 'What up?' });
    await writeFileAsync('Readme.md', generator(answers));
    console.log('Readme written!\n');
  } catch (err) {
    console.log(`Your error was: ${err}`);
  }
};

init();
