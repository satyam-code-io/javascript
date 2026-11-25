const name = "Satyam"
const repoCount = 5

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another way to declare string

const teamName = new String("Team-alpha")

console.log(teamName[0])
console.log(teamName.__proto__);


console.log(teamName.length);
console.log(teamName.toUpperCase());
console.log(teamName.charAt(2));
console.log(teamName.indexOf('a'));

const newString = teamName.substring(0, 4)
console.log(newString);

const anotherString = teamName.slice(-6, 4)
console.log(anotherString);    // you can give -ive value so it give result of reverse

const newStringOne = "  Satyam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyam.com/satyam%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('satyam'));

console.log(teamName.split('-'));    // string se array mai chahiye


// use of 'at' method:-

const mySelf = "my name is satyam choudhary"

const index = 9

console.log(`See at the index of ${index} the character is ${mySelf.at(index)}`);


// use of endswith():-
const contentString = "Hello get set ready";

console.log(contentString.endsWith('ready'));

