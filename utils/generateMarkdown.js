// Creates a function that returns a license badge based on which license is passed in
const fs = require('fs');

const renderLicenseBadge = (licenseType) => {
  let color;
  if (licenseType === "MPL") color = "red";
  if (licenseType === "GPL") color = "purple";
  if (licenseType === "Apache") color = "green";
  if (licenseType === "MIT") color = "blue";
  if (licenseType === "CC") color = "gray";
  if (licenseType === "BSD") color = "goldenrod";
 
  return ( 
    `
![${licenseType}](https://img.shields.io/badge/license-${licenseType}-${color})
     ` 
  );
};

//function to generate markdown for README
const generateMarkdown = (answers) => {
  const template = (`
# ${answers.title} 

  

## Description 
  ${answers.description}
  
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Installation 
  ${answers.installation}

## Usage 
  ${answers.usage}

## License 
  This project is license under ${answers.license}
${renderLicenseBadge(answers.license)}
  
## Contributing 
  ${answers.contribution}

## Tests
  ${answers.test}

## Questions
For any questions about this project, contact me at ${answers.email}. 
You can find my projects at https://github.com/${answers.github}.
`);
  fs.writeFileSync('./output/README.md', template);
  console.log('README CREATED');
  process.exit();
}

module.exports = { generateMarkdown };
