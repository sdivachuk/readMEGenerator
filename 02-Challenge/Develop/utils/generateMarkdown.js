// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return`
  <h1 align="center"> # ${data.title} </h1>

  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  For any questions about this project, contact me at ${data.email}. 
  You can find my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
