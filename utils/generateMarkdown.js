// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
      if (license == "Apache 2.0") {
        return `
        [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `
      }
      else if (license == "Boost Software") {
        return `
        [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
        `
      }
      else if (license == "BSD 3-Clause") {
        return `
        [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
        `
      }
      else {
        return ``;
      }
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `
      
      `
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title} 
  
    ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usages}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  IF you seek more information, please reach out to me.
  
  [GITHUB](https://github.com/${data.github})
  
  [EMAIL](${data.email})
  
  `;
  }
  
  module.exports = generateMarkdown;