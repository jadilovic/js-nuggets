//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const example = async () => {
  return 'hello there'
}

console.log(example());

async function someFun() {
  const result = await example();
  console.log(result);
}

someFun();

const users = [
	{ id: 1, name: 'john' },
	{ id: 2, name: 'susan' },
	{ id: 3, name: 'anna' },
];

const articles = [
	{ userId: 1, articles: ['one', 'two', 'three'] },
	{ userId: 2, articles: ['four', 'five'] },
	{ userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];


function getUser(userName) {
  return new Promise((resolve, reject) => {
    const userObject = users.find((item) => item.name === userName);
    if (userObject) {
      resolve(userObject.id);
    } else {
      reject(`No user with name ${userName}`)
    }
  })
}

function getUserArticles(userId) {
  return new Promise((resolve, reject) => {
    const articlesObject = articles.find((item) => item.userId === userId);
    if (articlesObject) {
      resolve(articlesObject.articles);
    } else {
      reject(`No user with user id ${userId} found`);
    }
  })
}

// getUser('susan')
// .then((userId) => getUserArticles(userId))
// .then((articles) => console.log(articles))
// .catch((err) => console.log(err));

const list = async () => {
  try {
    const userId = await getUser('anna');
    const articles = await getUserArticles(userId);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
}

list();

//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector('.btn');

const addColor = (time, selector, color) => {
	const element = document.querySelector(selector);
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve(color);
			}, time);
		} else {
			reject(`selector : ${selector} does not exist`);
		}
	});
};

btn.addEventListener('click', () => {
	addColor(1000, '.first', 'red', 'testing')
		.then((data) => addColor(3000, '.second', 'blue', data))
		.then((data) => {
			console.log(data);
			addColor(2000, '.third', 'green');
		})
		.catch((err) => console.log(err));
});

// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;
const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);
	if (number > 4) {
		resolve(`resolved : ${number}`);
	} else {
		reject(`error : ${number}`);
	}
});
console.log(promise);

promise.then((data) => console.log(data)).catch((err) => console.log(err));
