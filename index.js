const inquirer = require('inquirer');
const fs = require('fs');

// Function to prompt user for input
inquirer.prompt([
    { 
        type: 'input', 
        name: 'title', 
        message: 'Enter the title of your project:' 
    },
    { 
        type: 'input', 
        name: 'description', 
        message: 'Enter a description of your project:' 
    },
    { 
        type: 'input', 
        name: 'installation', 
        message: 'Enter installation instructions:' 
    },
    { 
        type: 'input', 
        name: 'usage', 
        message: 'Enter usage information:' 
    },
    { 
        type: 'list', 
        name: 'license', 
        message: 'Choose a license for your application:', 
        choices: ['MIT', 'Apache', 'GPL', 'Other'] 
    },
    { 
        type: 'input', 
        name: 'contributing', 
        message: 'Enter contribution guidelines:' 
    },
    { 
        type: 'input', 
        name: 'tests', 
        message: 'Enter test instructions:' 
    },
    { 
        type: 'input', 
        name: 'github', 
        message: 'Enter your GitHub username:' 
    },
    { 
        type: 'input', 
        name: 'email', 
        message: 'Enter your email address:' 
    }
]).then((answers) => {
    // Generate README content based on user input
    const licenseBadge = `[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://opensource.org/licenses/${answers.license})`;

    const readmeContent = `
# ${answers.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to reach out to me at [${answers.email}](mailto:${answers.email}). You can also check out my GitHub profile at [https://github.com/${answers.github}](https://github.com/${answers.github}).
`;

    // Write the generated README content to a README.md file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md file generated successfully!');
});