const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const first = './content/first.txt';

const start = async () => {
	try {
		const firstText = await readFile(first, 'utf8');
		const secondText = await readFile('./content/second.txt', 'utf8');
		console.log(firstText, secondText);
		await writeFile('./content/double.txt', `${firstText} and ${secondText}`, {
			flag: 'a',
		});
	} catch (error) {
		console.log(error);
	}
};

start();

// getText(first)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   })
// }
console.log('what');
