module.exports = class Package {
  constructor(name) {
    this.name = name;
  }
  repeat(num) {
    return this.name.repeat(num);
  }
}
  
