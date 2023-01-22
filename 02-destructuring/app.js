
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
      street: "hhhh"
    }
  }
};

const getObject = ({last, city, siblings: {sister}}) => {
  // const {last, city} = bob;
  console.log(last, city, sister);
};

getObject(bob);

const {last: prezime, city, siblings, siblings: {sister: favoriteSister}, ssi: {number: {street: mine}}} = bob;

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
