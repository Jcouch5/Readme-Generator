// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case "GNU Affero General Public License v3.0": return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "Apache License 2.0": return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'BSD 2-Clause': return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case 'BSD 3-Clause': return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost Software License 1.0": return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal": return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0": return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU General Public License v2.0": return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU General Public License v3.0": return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU Lesser General Public License v2.1": return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
    case "MIT License": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla Public License 2.0": return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense": return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    switch (license){
      case "GNU Affero General Public License v3.0": return "https://api.github.com/licenses/agpl-3.0";
      case "Apache License 2.0": return "https://api.github.com/licenses/apache-2.0";
      case 'BSD 2-Clause': return "https://api.github.com/licenses/bsd-2-clause";
      case 'BSD 3-Clause': return "https://api.github.com/licenses/bsd-3-clause";
      case "Boost Software License 1.0": return "https://api.github.com/licenses/bsl-1.0";
      case "Creative Commons Zero v1.0 Universal": return "https://api.github.com/licenses/cc0-1.0";
      case "Eclipse Public License 2.0": return "https://api.github.com/licenses/epl-2.0";
      case "GNU General Public License v2.0": return "https://api.github.com/licenses/gpl-2.0";
      case "GNU General Public License v3.0": return "https://api.github.com/licenses/gpl-3.0";
      case "GNU Lesser General Public License v2.1": return "https://api.github.com/licenses/lgpl-2.1";
      case "MIT License": return "https://api.github.com/licenses/mit";
      case "Mozilla Public License 2.0": return "https://api.github.com/licenses/mpl-2.0";
      case "The Unlicense": return "https://api.github.com/licenses/unlicense";
      default: return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.fileName}

  ## ${data.license} ${renderLicenseBadge(data.license)}
  [License Link](${renderLicenseLink(data.license)})

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
