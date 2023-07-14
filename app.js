// to run this, you must have node.js
// enter ' node app.js ' to run the program
// made by dennzlak on github


console.log(' MADE BY dennzlak ON GITHUB')
console.log('https://github.com/dennzlak')

const testFolder = 'YOUR MUSIC FOLDER GOES HERE';
const phrase = 'PHRASE TO REMOVE GOES HERE (EG. Y2MATE, Y2META)';

const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if (file.startsWith(phrase)) {
        var newname = file.replace(phrase, '')
        var fileLocation = testFolder +'/'+file
        var newestName = testFolder + '/' + newname
        fs.renameSync(fileLocation, newestName)
    }
    console.log(file);
  });
});

