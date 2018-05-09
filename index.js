const path = require('path');
const fs = require('fs');

const json = fs.readFileSync(path.resolve(__dirname, 'package.json'));
const VERSION = JSON.parse(json).version;

module.exports = class Package {
  constructor(name) {
    this.name = name;
  }
  repeat(num) {
    return this.name.repeat(num);
  }
  version() {
    console.log(VERSION);
  }
}
