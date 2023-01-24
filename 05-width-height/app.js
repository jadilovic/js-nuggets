const person = {
  name: "aki",
  age: 44,
  status: "developer"
};

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(key, element);
  }
}

for (const iterator of [2, 3, 4, 7]) {
  console.log(iterator);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const arrAttributes = Object.entries(person).map((arr) => {
  const [key, value] = arr;
  const object = {};
  object[key] = value;
  return object;
})
console.log(arrAttributes);

for (const [key, value] of Object.entries(person)) {
 // const [key, value] = item;
  console.log(key, ":", value);
}

//  Javascript Nuggets

const heading = document.querySelector('.heading');
// console.log(heading);

const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);

const getElement = (selector, isList) => {
  // if (isList) {
  //   const el = document.querySelectorAll(selector);
  //   if (el.length < 1) {
  //     throw new Error(`There is no selectors with name ${selector}`)
  //   }
  //   return el;
  // }
  // const el = document.querySelector(selector);
  // if(el) return el;
  const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
  if ((isList && el.length > 0) || (!isList && el)) return el;
  throw new Error(`Selector ${selector} does not exist!`)
}

console.log(getElement(".list-item", true));
console.log(getElement('.heading'));

//  Javascript Nuggets
//  ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

import fetchTabs from './fetchTabs.js';
const tabs = await fetchTabs();
console.log(tabs);

const arr = [3, 6, 8, 9];
console.log(arr.at(2));
console.log(arr.at(-3));
const text = 'Coding Addict';
console.log(text.at(3));
console.log('jasmin'.at(4));

fetch('https://www.course-api.com/react-tabs-project')
	.then((resp) => resp.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

const getData = async () => {
	const resp = await fetch('https://www.course-api.com/react-tabs-project');
	const data = await resp.json();
	console.log(data);
};

getData();

// in the module only !!!!!!!
const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);
// in the module only !!!!!!!

//  Javascript Nuggets
//  Timestamps
console.log(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());
console.log(new Date().getTime());
for (let index = 0; index < 10000; index++) {
	const element = index;
}
console.log(new Date().valueOf());

setTimeout(() => {
	console.log(new Date().valueOf());
}, 1000);

const people = [];

people.push({ id: Date.now(), name: 'peter' });

setTimeout(() => {
	people.push({ id: Date.now(), name: 'peter' });
	console.log(people);
}, 500);

const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(new Date(now));
console.log(new Date(futureDate));

const start = new Date().getTime();
const end = new Date(2023, 0, 25).getTime();

const difference = end - start;
console.log(difference / (1000 * 60 * 60 * 24));

// Javascript Nuggets
// Width/Height - window, any element
// innerHeight - window
// innnerWidth - window
// getBoundingClientRect() - any element

console.log('height', window.innerHeight);
console.log('width', window.innerWidth);

const getDimensions = () => {
	const box = document.querySelector('.box');
	console.log(box.getBoundingClientRect());
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', getDimensions);
