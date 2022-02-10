const path = require('path');

console.log(path.sep);

const filepath = path.join('\content', 'sub-folder', 'text.txt');
console.log(filepath);

const basename = path.basename(filepath)
console.log(basename)

const abosolute = path.resolve(__dirname, 'content', 'sub-folder', 'text.txt');

console.log(abosolute)