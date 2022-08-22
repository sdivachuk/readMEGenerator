module.exports = [
    {
      type: 'input', 
      name: 'title',
      message: 'What is the project title?',
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Write a description of the project ',
      },
      {
        type: 'input', 
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input', 
        name: 'usage',
        message: 'How do you use this project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please list contributors if any.'
      },
      {
        type: 'input',
        name: 'test',
        message: 'How can someone test this project?',
      },
      {
        type: 'rawlist',
        name: 'license',
        message: 'What license was this created with?',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
            "none",
        ]
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      }

    ];