const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Введите число: ', num => {

	if (+num > 7) {
		console.log('Привет')
	}

	readline.close()
});
