// made by dennzlak on github

// to run this, you must have node.js
// enter ' node app.js ' to run the program
// change the 'y2mate.is' to any website you used


const fs = require('fs');
console.log(' MADE BY dennzlak ON GITHUB')
console.log('https://github.com/dennzlak')


const testFolder = 'YOUR MUSIC FOLDER GOES HERE';


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if (file.startsWith('y2mate.is - ') {
        var newname = file.replace('y2mate.is - ', '')
        var fileLocation = testFolder +'/'+file
        var newestName = testFolder + '/' + newname
        fs.renameSync(fileLocation, newestName)
    }
    console.log(file);
  });
});

