// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters1 = udemy.split('')
const letters2 = [...udemy];
console.log(letters1, letters2);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const all = [...boys, ...girls, bestFriend];
console.log(all);
const newAll = all;
const newAllCopy = [...all];
newAll[0] = "aki";
newAllCopy.push("aki");
console.log(all);
console.log(newAll);
console.log(newAllCopy);

const boy = {name: "aki", age: 99};
const boy2 = boy;
const boy3 = {...boy, name: "cuni", city: "detroit"};
boy.lastName = "smith";
console.log(boy2);
console.log(boy3);

// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const voce = ['apple', 'orange', 'lemon', 'banana', 'pear'];

const [apple, my, ...restFruits] = voce;
console.log(restFruits);
const specificFruit = restFruits.find((item) => item === 'banana');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const {job, ...rest} = person;
console.log(job, rest);

// functions

const getAverage = (name, ...resti) => {
  console.log("FUNCTION");
  console.log(name);
  console.log(resti);
  const reduced = resti.reduce((acc, curr) => {
    acc += curr;
    return parseFloat((acc / resti.length).toFixed(2));
  }, 0)
  return reduced;
}
const testArr = [44, 22, 11, 33, 55]
console.log(getAverage(person.name, 45, 55, 66, 77, 88));
console.log(getAverage(person.name, ...testArr));

// objects destructuring

const bob = {
	first: 'bob',
	last: 'sanders',
	city: 'chicago',
	siblings: {
		sister: 'jane',
	},
	ssi: {
		number: {
			street: 'hhhh',
		},
	},
};

const getObject = ({ last, city, siblings: { sister } }) => {
	// const {last, city} = bob;
	console.log(last, city, sister);
};

getObject(bob);

const {
	last: prezime,
	city,
	siblings,
	siblings: { sister: favoriteSister },
	ssi: {
		number: { street: mine },
	},
} = bob;

console.log(prezime, city, siblings, favoriteSister, mine);

// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

let fruit1 = fruits[0];
let fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

[fruit2, fruit1] = [fruit1, fruit2];

console.log(fruit1, fruit2);

const [, aki] = friends;
console.log(aki);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const getData = async () => {
	const result = await fetch(url);
	const data = await result.json();
	console.log(data);

	const reduced = data.reduce((acc, curr) => {
		const { language } = curr;
		if (language) {
			acc[language] = acc[language] + 1 || 1;
		}
		return acc;
	}, {});

	const objectList = [];

	Object.entries(reduced).forEach(([key, value]) => {
		objectList.push(`<h3>${key}: ${value}</h3>`);
	});

	console.log(objectList);
	const listObjects = document.getElementById('list');
	listObjects.innerHTML = objectList.join('');

	console.log(reduced);
	const arrReduced = [];
	for (const key in reduced) {
		arrReduced.push({ [key]: reduced[key] });
	}

	console.log(arrReduced);
	const sorted = arrReduced.map((item) => {
		for (const key in item) {
			return `<h4>${key}: ${item[key]}</h4>`;
		}
	});
	const rows = document.querySelector('.rows');
	rows.innerHTML = sorted.join('');

	const list = data.map((item) => `<h6>${item.language}</h6>`);
	const element = document.getElementById('app');
	element.innerHTML = list.join('');
};

getData();
