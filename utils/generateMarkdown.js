// TODO: Create a function that returns a license badge based on which license is passed in

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.contact}
  * Github: [${data.username}](https://github.com/${data.username})
  * Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
