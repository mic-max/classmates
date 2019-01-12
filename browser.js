// Paste following into browser on the Compose New Email section of cuLearn.

let opts = document.getElementById('from_users').options;
let students = [];
for (let i = 0; i < opts.length; i++) {
	let o = opts.item(i);
	students.push(o.text.substr(0, o.text.indexOf(' (')))
}
students
