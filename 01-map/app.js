// MAP Method
const people = [
	{
		name: 'bob',
		age: 20,
		position: 'developer',
	},
	{
		name: 'anna',
		age: 25,
		position: 'designer',
	},
	{
		name: 'susy',
		age: 30,
		position: 'the boss',
	},
	{
		name: 'john',
		age: 26,
		position: 'intern',
	},
];
const menu = [
	{
		name: 'pancakes',
		category: 'breakfast',
	},
	{
		name: 'burger',
		category: 'lunch',
	},
	{
		name: 'steak',
		category: 'dinner',
	},
	{
		name: 'bacon',
		category: 'breakfast',
	},
	{
		name: 'eggs',
		category: 'breakfast',
	},
	{
		name: 'pasta',
		category: 'dinner',
	},
];
const drivers = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'peter', age: 25, position: 'designer' },
	{ name: 'susy', age: 30, position: 'the boss' },
	{ name: 'anna', age: 35, position: 'intern' },
	{ name: 'anna', age: 60, position: 'intern' },
];
const cart = [
	{
		title: 'Samsung Galaxy S7',
		price: 599.99,
		amount: 1,
	},
	{
		title: 'google pixel ',
		price: 499.99,
		amount: 2,
	},
	{
		title: 'Xiaomi Redmi Note 2',
		price: 699.99,
		amount: 4,
	},
	{
		title: 'Xiaomi Redmi Note 5',
		price: 399.99,
		amount: 3,
	},
];
// Quokka.js - Extension returns a new array does not change the size of original array (unlike filter)
// uses values from original array when making new one

// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const languages = data.reduce((acc, curr) => {
    // if (acc[curr.language]) {
    //   return {
		// 		...acc,
		// 		[curr.language]: acc[curr.language] + 1,
		// 	};
    // } else {
    //   return {
		// 		...acc,
		// 		[curr.language]: 1,
		// 	};
    // }
    const {language} = curr;
    if (language) {
      acc[language] = acc[language] + 1 || 1;
    }
    return acc;
  }, {});
  console.log(languages);
}

fetchData();

const {totalItems, totalPrice} = cart.reduce((acc, curr) => {
  const {price, amount} = curr;
  return {
    totalPrice: acc.totalPrice += price * amount,
    totalItems: acc.totalItems += amount
  }
}, {
  totalPrice: 0,
  totalItems: 0
})

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

console.log(totalItems, parseFloat(totalPrice.toFixed(2)));

const total = staff.reduce((acc, curr) => {
  return acc += curr.salary;
}, 0)

console.log(total);

const young = drivers.find((per) => per.age < 35);
const boss = drivers.find((person) => person.position === "the boss");
console.log(young);
console.log(boss);

const youngDrivers = drivers.filter((driver) => driver.age <= 25).map((item) => item.name);
const developers = drivers.filter((item) => item.position === 'developehr');
console.log(developers);
console.log(youngDrivers);

const state = {
  name: "",
  age: "",
  loading: false
}

function updateState(key, value) {
  state[key] = value;
}
console.log(state);
updateState("name", "boby");
updateState('name', 'carl');
updateState("city", "Boston");
console.log(state);

const person = {
  name: "john"
}

person.age = 20;
person['country'] = "Bosnia";
person['street'] = "Marko polo";

console.log(person);

const world = people.map((person) => {
  return {
    ...person,
    [person.age]: "what age?",
    ['id']: person.age + 33
  }
})

console.log(world);

const unique = ["all", ...new Set(menu.map((meals) => meals.category))];

console.log(unique);

const result3 = document.querySelector(".result3");
result3.innerHTML = unique.map((item) => `<h3>${item}</h3>`).join('');


const getNames = (person) => person.name + person.age;

const namesAges = people.map(getNames);

console.log(namesAges);

const ages2 = people.map((person) => person.age)

console.log(ages2);

const newPeopleObjects = people.map((person) => {
  return {
    ...person,
    work: person.position + person.age * 2
  }
})

console.log(newPeopleObjects);


const work = newPeopleObjects.map((worker) => `<h3>${worker.work}</h3>`);
const result2 = document.getElementById("result2");

result2.innerHTML = work.join('');











const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
	return {
		firsName: item.name.toUpperCase(),
		oldAge: item.age + 20,
	};
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
