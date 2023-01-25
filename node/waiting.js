console.log('hello people dear');

const waiting = document.getElementById('waiting');

setTimeout(() => {
	waiting.textContent = 'Everyone is waiting for me';
	console.log('waiting');
}, 0);

console.log('end of code');
