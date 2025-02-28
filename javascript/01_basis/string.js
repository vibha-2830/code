const Name = "vibha"
const repoCount = 50

console.log(Name + repoCount + "value");

const gameName = new String('disha-vibha-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =  gameName.slice(-8,4)
console.log(anotherString);

//trim=> used for removing the forward and the backward place 

const newStringOne = "   vibha     "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace=> used for replace the signs 

const url = "https://vibha.com/vibha%20bhisikar"

console.log(url.replace('%20','-'));
console.log(url.includes("vibha"));

console.log(gameName.split('-'));