// utils/generateMarkdown.js

function generateMarkdown(data) {
  let markdown = `# ${data.title}\n\n`;

  // Description section
  markdown += `## Description\n${data.description}\n\n`;

  // Table of Contents
  markdown += '## Table of Contents\n';
  if (data.installation) markdown += `1. [Installation](#installation)\n`;
  if (data.usage) markdown += `2. [Usage](#usage)\n`;
  if (data.license) markdown += `3. [License](#license)\n`;
  if (data.contributing) markdown += `4. [Contributing](#contributing)\n`;
  if (data.tests) markdown += `5. [Tests](#tests)\n`;
  markdown += `6. [Questions](#questions)\n\n`;

  // Installation section
  if (data.installation) markdown += `## Installation\n${data.installation}\n\n`;

  // Usage section
  if (data.usage) markdown += `## Usage\n${data.usage}\n\n`;

  // License section
  if (data.license) {
    markdown += `## License\n`;
    markdown += `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})\n\n`;
    markdown += `This project is licensed under the ${data.license} license.\n\n`;
  }

  // Contributing section
  if (data.contributing) markdown += `## Contributing\n${data.contributing}\n\n`;

  // Tests section
  if (data.tests) markdown += `## Tests\n${data.tests}\n\n`;

  // Questions section
  markdown += `## Questions\n`;
  markdown += `For questions about the project, please contact [${data.username}](https://github.com/${data.username}) via email at ${data.email}.\n\n`;

  return markdown;
}

module.exports = generateMarkdown