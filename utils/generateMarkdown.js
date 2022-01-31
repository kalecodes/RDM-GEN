// TODO: Create a function that returns a license badge based on which license is passed in
const {title, description, installation, usage, license, contributions, tests, username, email, contact} = projectData
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === 'GNU GPLv3') {
//     return 
//   } else if (license === 'Apache License 2.0') {
//     return 
//   } else if (license === 'MIT License') {
//     return 
//   } else if (license === 'The Unlicense') {
//     return 
//   } else {
//     return '';
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'GNU GPLv3') {
//     return 
//   } else if (license === 'Apache License 2.0') {
//     return 
//   } else if (license === 'MIT License') {
//     return 
//   } else if (license === 'The Unlicense') {
//     return 
//   } else {
//     return '';
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return `
//     ## ${license} 
//     ${licenseBadge}
//     ${licenseLink}
//     `
// }

// function generateLicense(confirmLicense, license) {
//   if (confirmLicense) {
//     renderLicenseBadge(license);
//     renderLicenseLink(license);
//     renderLicenseSection(license);
//   } else {
//     return '';
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${title}
    ## Description
      ${description}
    ## Table of Contents
      * Installation
      * Usage
      * License
      * Contributing
      * Tests
      * Questions
    
    ## Installation
      ${installation}

    ## Usage
      ${usage}

    ## License
      ${license}
    
    ## Contributing
      ${contributions}
    
    ## Tests
      ${tests}
    
    ## Questions
      ${contact}
      ${username}
      ${email}
  `;
}

module.exports = generateMarkdown;
