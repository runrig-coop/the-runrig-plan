const fs = require('fs');
const path = require('path');

const readmePath = path.resolve(__dirname, '../README.md');
const indexPath = path.resolve(__dirname, '../index.md');

const data = fs.readFileSync(readmePath);
fs.writeFileSync(indexPath, data);
