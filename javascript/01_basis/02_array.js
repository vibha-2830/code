//array

// const myArr = [0,1,2,3,4,5]
// const myheros = ["shaktiman" , "nagraj"]

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(7)
// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join() 
// console.log(myArr);
// console.log(newArr);

//slice ,  splice

// console.log("A", myArr);
// const myn1 = myArr.slice(1 , 3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1 , 3)
// console.log("C", myArr);
// console.log(myn2);

// part2 array

const languages = ["python" , "java" , "html"]
const colors = ["red" , "blue" , "yellow"]

// languages.push(colors)
// console.log(languages);
// console.log(languages[3][1]);

// const allNames = languages.concat(colors)
// console.log(allNames);

const all_new_Names = [...languages,  ...colors]
console.log(all_new_Names);

console.log(Array.isArray("vibha"));
console.log(Array.from("vibha"));