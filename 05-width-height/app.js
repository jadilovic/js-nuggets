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

people.push({id: Date.now(), name: 'peter'});

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
