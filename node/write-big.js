const {writeFileSync} = require('fs');

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `This is iteration number ${i + 1} : : `, {flag: 'a'});
}