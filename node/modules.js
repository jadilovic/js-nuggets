// Globals - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current file / module
// process - info about env where to program is being executed
// require('./modules');

const os = require('os');
const path = require('path');

console.log(path.sep);

const filePath = path.join('content', 'subfolder', 'text.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');

console.log(absolute);

const user = os.userInfo();

console.log(user);

console.log(`System up time ${os.uptime()} seconds`);

const currentSystem = {
  name: os.type(),
  release: os.release(),
  memory: os.totalmem(),
  free: os.freemem()
}

console.log(currentSystem);

const names = require('./names');
const sayHello = require('./utils');
require('./mine-granade');

// const {list, newPerson} = require('./alternative-exports');
const data = require('./alternative-exports');
console.log(data);
// console.log(list);
// console.log(newPerson);
console.log(names);
const { nick, first, last } = names;

sayHello(`${nick} ${first} ${last}`);
console.log(module.exports);

// sayHello("aki");

const amount = 12;

if (amount < 10) {
	console.log('small number');
} else {
	console.log('big number');
}

console.log('dirname: ', __dirname);
console.log('filename: ', __filename);
// console.log('require: ', require());
// console.log('module: ', module);
// console.log('process: ', process);

// setInterval(() => {
//   console.log("hello world");
// }, 1000);
