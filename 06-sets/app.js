// Array includes() method

const fruits = ["lemon", "apple", "banana", "kiwi"];
console.log(fruits.includes("apple"));
console.log(fruits.includes('apple', 2));

if (fruits.includes('lemon')) {
  console.log("Lemon is included");
}

// includes() method - checks if string contains another string

const stringCheck = "hello dear friend jasmin";
const check = stringCheck.includes("dear", 9);
console.log(check);

// Set object - store unique values of any type

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

const filteredMenu = menu.filter((item) => item.name.toLowerCase().includes("ak"));
console.log(filteredMenu);

const egg = {
		name: 'eggs',
		category: 'breakfast',
	};

  const hasNameEggs = egg.name.includes("eg");
  console.log("has eg : ", hasNameEggs);

  const hasEggs = menu.includes(egg);
  console.log("has eggs : ", hasEggs);

const categories = menu.map((item) => item.category);
const uniqueCategories = [...new Set(categories)];
console.log(uniqueCategories);

const categories2 = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories2);

const setObj = new Set();
console.log(setObj);

setObj.add("klix");
setObj.add('klix');
setObj.add('klixf');
setObj.add('kli');
setObj.add('kl');
setObj.add({name: "aki"});

console.log(setObj);

const del = setObj.delete("klix")
console.log(del);
console.log(setObj);

const del2 = setObj.delete('klix');
console.log(del2);
console.log(setObj);

const hasIt = setObj.has('klix');
const hasIt2 = setObj.has('klixf');
console.log(hasIt);
console.log(hasIt2);
console.log(setObj);

const arr = setObj.entries();
console.log(arr);

const keys = setObj.keys();
const values = setObj.values();
console.log(keys);
console.log(values);
