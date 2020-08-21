const fs = require('fs');
const util = require('util');

const axios = require('axios');
const inquirer = require('inquirer');

const generator = require('./util/generator');
const readmeQues = require('./questions/questions');

const writeFileAsync = util.promisify(fs.writeFile);

const init = async () => {
  try {
    const answers = await inquirer.prompt(readmeQues);
    const { data } = await axios.get(
      `https://api.github.com/users/${answers.githubId}`
    );
    answers.pic = data.avatar_url;
    await writeFileAsync(answers.pathToRepo + '/Readme.md', generator(answers));
    console.log('\nReadme written!\n');
  } catch (err) {
    console.log(`Your error was: ${err}`);
  }
};

init();

module.exports = init;
