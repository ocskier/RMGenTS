const prereqGenerator = require('./prereqGenerator');

interface dataType {
  title: string;
  githubId: string;
  description: string;
  pic: string;
  prereq: string;
  installDirections: string;
  usage: string;
  installCmd: string;
  testing: string;
  deploy: string;
  authors: string;
  license: string;
}

module.exports = function (dataObj: dataType) {
  return `# ${dataObj.title}
  
  <img style="border-radius: 20px;" src="https://img.shields.io/static/v1?label=LICENSE&message=${
    dataObj.license
  }&color=BLUE&style=for-the-badge">

<br>

${dataObj.description}

<br>

<img width=200 height=200 src="${dataObj.pic}">

## Prerequisites

${prereqGenerator(dataObj.prereq)}

## Installation

${dataObj.installDirections}

\`\`\`bash
${dataObj.installCmd}
\`\`\`

## Usage

\`\`\`bash
${dataObj.usage}
\`\`\`

## Running Tests

\`\`\`bash
${dataObj.testing}
\`\`\`

## Deployment

${dataObj.deploy}

## Authors

[${dataObj.authors}](http://github.com/${dataObj.githubId})

Please make sure to update tests as appropriate.

## License

${dataObj.license}

`;
};
