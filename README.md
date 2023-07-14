# rename-y2mate-files
removes ' y2mate - ' from your file.

- you might want to download node.js for this to work: https://nodejs.org/
- this is the file, you can copy and paste or download:  https://github.com/dennzlak/rename-y2mate-files/blob/main/app.js

# Tutorial
so this might look confusing, i'm gonna explain :)

`
const testFolder = 'YOUR MUSIC FOLDER GOES HERE';
`
- replace `'YOUR MUSIC FOLDER GOES HERE'` with your music folder (eg. `'C:/Users/[USER]/Music'` (with quotation marks)
- make sure you flip the backslashes to forwardslashes `"C:/Users/[USER]/Music"`

<code>
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if (file.startsWith('</code>y2mate.is - '<code>) {
        var newname = file.replace('</code>y2mate.is - '<code> , '')
        var fileLocation = testFolder +'/'+file
        var newestName = testFolder + '/' + newname
        fs.renameSync(fileLocation, newestName)
    }
    console.log(file);
  });
});
</code>
