// Panchi jao letter le ke aao jb aaon gae to bata dena me agay ka code chalata ho.
// jb panchi aye to hi agli line chalao.
fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(readble => console.log(readble.results[0].gender))
// fetch apko .then deta hai like promises.
// blob = raita = apke readble format me ni ha = computer hexadecimal code me baat krta yani binary me bat krta hai.