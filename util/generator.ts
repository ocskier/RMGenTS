interface dataType {
  title: string;
  githubId: string;
  description: string;
  pic: string;
  installDirections: string;
  installCmd: string;
  testing: string;
  deploy: string;
  authors: string;
  license: string;
}

module.exports = function (dataObj: dataType) {
  return `# ${dataObj.title}

${dataObj.description}

<img width=200 height=200 src="${dataObj.pic}">

## Prerequisites

## Installation

${dataObj.installDirections}

\`\`\`bash
${dataObj.installCmd}
\`\`\`

## Usage

\`\`\`bash

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
<img src="https://img.shields.io/static/v1?label=LICENSE&message=${dataObj.license}&color=BLUE">
`;
};
