// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const checkLicense = (license) => {
  if(license === 'none') {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.fileName}

  ## ${data.license} ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

  ## Table of contents
  </br>
  [Description](#description)
  </br>
  [Install](#install)
  </br>
  [Use](#use)
  </br>
  [Contribute](#contribute)
  </br>
  [Tests](#tests)
  </br>
  [Questions](#questions)

  ## Description
  ${data.description}

  ## Use
  ${data.use}

  ## Install
  ${data.install}

  ## Contribute
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  Please contact me at either:
  * [GitHub](https://github.com/${data.gitHub})
  * Email: ${data.email}

`;
}

module.exports = generateMarkdown;
