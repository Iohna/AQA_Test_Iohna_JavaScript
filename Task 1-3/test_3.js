const maxNum = 20
let arr = []

for(let i = 0; i < maxNum; i++) {
	arr.push( Math.floor(Math.random() * maxNum ) )
}

console.log(arr)

arr.forEach(item => {
	if(item%3 === 0 && item !== 0) {
		console.log(item)
	}
})
