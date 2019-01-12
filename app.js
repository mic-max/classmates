let courses = require('./data.json')

function pairs(obj, func) {
	let keys = Object.keys(obj);
	let vals = Object.values(obj);
	for (let i = 0; i < keys.length - 1; i++) {
		for (let j = i + 1; j < keys.length; j++)
			func(keys[i], vals[i], keys[j], vals[j])
	}
}

function intersection(a, b) {
	return a.filter(v => -1 !== b.indexOf(v))
}

function displayIntersection(keyA, valA, keyB, valB) {
	let res = intersection(valA, valB)
	console.log(`${keyA} and ${keyB} - ${res.length} shared:`)
	console.log(res)
}

pairs(courses, displayIntersection)
