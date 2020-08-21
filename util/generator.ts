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

  <img style="border-radius: 20px;" src="https://img.shields.io/static/v1?label=LICENSE&message=${dataObj.license}&color=BLUE&style=for-the-badge">

${dataObj.description}

<img width=200 height=200 src="${dataObj.pic}">

## Prerequisites

<a href="https://nodejs.org/en/"><img width=80 height=80 src="logo.svg"><p style="margin:-2rem 0 0 0.75rem">${dataObj.prereq}</p></a>

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
