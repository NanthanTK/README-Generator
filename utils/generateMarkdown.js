

// Gets the selected license and the lice3nses array 
//and creates the badge and url links for the selected license.

const getBadgeAndUrl=(licenseName,licenses) =>{
  const license = licenses.find(l => l.license === licenseName);
  return {
    badge: license ? license.badge : '',
    url: license ? license.url : ''
  };
}

//function to generate markdown for README
const generateMarkdown = (answers,licenses) => {
  const { badge, url } = getBadgeAndUrl(answers.license,licenses);
  return `[![License: ${answers.license}](${badge})](${url})

  # ${answers.title}

  
  ## Description

  ${answers.description}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.
  
  
- [${answers.title}](#projecttitle)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Quaestions](#quaestions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.collaborators}

## License

${answers.license}

## How to Contribute

${answers.contribution}

## Tests

${answers.test}

## Quaestions

if you have further questions, check my contact information on my GitHub profile at 
${answers.gitHub} 
or
email me at ${answers.email}`;
}

module.exports = generateMarkdown;
