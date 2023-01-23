//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
			second.style.color = 'green';
      setTimeout(() => {
				third.style.color = 'blue';
			}, 2000);
		}, 3000);
  }, 1000);
})

// ----------------------------

function makeUpperCase(name) {
	return name.toUpperCase();
}

function reverseString(name) {
	return name.split('').reverse().join('');
}

function handleName(name, cb) {
	const fullName = `${name} smith`;
	return cb(fullName);
}

console.log(handleName('peter', makeUpperCase));
console.log(handleName('peter', reverseString));

handleName('aki', function (params) {
	console.log(params);
});

handleName('cuni', (value) => console.log(value));

const notification = () => {
	console.log('again clicked');
};

const button = document.querySelector('.btn1');
button.addEventListener('click', function () {
	console.log('you clicked');
});

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', notification);

const getUsers = async () => {
	const result = await fetch('https://randomuser.me/api/?results=5');
	const data = await result.json();
	console.log(data.results);
	const list = data.results;
	list.forEach((element) => {
		console.log(element?.location?.timezone?.offset || 'no location');
	});
};

getUsers();

const people = [
	{
		name: 'bob',
		location: { street: '123 main street', timezone: { offset: '+7:00' } },
	},
	{ name: 'peter', location: { street: '123 Pine street' } },
	{
		name: 'susan',
		location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
	},
];

people.forEach((item) => {
	console.log(
		item.name,
		(item.location &&
			item.location.timezone &&
			item.location.timezone.offset) ||
			'no location'
	);
	console.log(item.location.timezone?.offset || 'no location');
});

// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy));

const element = document.querySelector('.app');
element.innerHTML = Array.from(udemy)
	.map((item) => `<div>${item}</div>`)
	.join('');

const texts = document.querySelectorAll('.text');
console.log(Array.from(texts));
console.log(texts[0].textContent);
const newText = Array.from(texts).find((item) => item.textContent === 'person');
console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
	return index;
});

const itemsPerPage = 14;
const numberOfPages = Math.ceil(items.length / itemsPerPage);
console.log(numberOfPages);

const newItems = Array.from({ length: numberOfPages }, (_, index) => {
	const start = index * itemsPerPage;
	return items.slice(start, start + itemsPerPage);
});

console.log(newItems);
