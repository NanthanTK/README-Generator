// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');

//function with array of questions and 
//inquirer prompt to get contend for the READ.me file.
const promptUser = () => {
    return inquirer.prompt([
  {
    type:'input',
    name: 'title',
    message: 'What is the title of your project?'
   },
   {
    type:'editor',
    name: 'description',
    message: 'Enter a description'
   },
   {
    type:'editor',
    name: 'installation',
    message: 'Enter installation instructions'
   },
   {
    type:'editor',
    name: 'usage',
    message: 'Enter usage information'
   },
   {
    type:'editor',
    name: 'collaborators',
    message: 'Enter your collaborators'
   },
   {
    type:'list',
    name: 'license',
    message: 'What license do you want to use?',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'MPL 2.0']
   },
   {
    type:'editor',
    name: 'contribution',
    message: 'Enter contribution guidelines'
    },
    {
    type:'editor',
    name: 'test',
    message: 'What tests have you used in this application?'
    },
    {
    type:'input',
    name: 'gitHub',
    message: 'What is your project Repo?'
    },
    {
    type:'input',
    name: 'email',
    message: 'What is your email?'
    }
   
    ]);
};

//Array with the badge and url links for selected licenses
const licenses = [
    {
      license: 'MIT',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      url: 'https://opensource.org/licenses/MIT'
    },
    {
      license: 'Apache 2.0',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      url: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
      license: 'GPL V3',
      badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      url: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
      license: 'BSD 3-Clause',
      badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      url: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
      license: 'MPL 2.0',
      badge: 'https://img.shields.io/badge/License-MPL%202.0-success.svg',
      url: 'https://opensource.org/licenses/MPL-2.0'
    }
  ];

//function to call user prompts, generate markdown
//and create file with the markdown content 
const init = () =>{  
    promptUser()
        .then((answers) => {
            const markdown = generateMarkdown(answers,licenses);
            //console.log(markdown);
            fs.writeFile('README.md', markdown, (err) => {
                if (err) throw err;
            console.log('Successfully generated a README.md file');
            });
        })  
        .catch((err) => console.error(err));
 };

//Function call to initialize app
init();
