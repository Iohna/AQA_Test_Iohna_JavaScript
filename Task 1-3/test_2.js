const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Введите имя: ', name => {

	if (name === 'Вячеслав') {
		console.log('Привет, Вячеслав')
	} else {
		console.log('Нет такого имени')
	}

	readline.close()
});
