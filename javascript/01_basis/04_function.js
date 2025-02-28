function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
}
// sayMyName()

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    // console.log(number1 + number2);
    return number1 + number2
}

const result = addTwoNumbers(15 , 15)
// console.log("Result = ",result);

//jab aap function ki defination banate hai tab usme jo input lete hai usko PARAMETERS bola jata hai.
//jab function ko call karate hai tab jo value uske under pass karte hai usko ARGUMENTS bola jata hai.

function loginUserMessage (username){
    if(username === undefined){
          console.log("please enter a user name");
          return
    }
    return  `${username} just logged in` 
}
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return(num1);
}

// console.log(calculateCartPrice(200,300,500));

const user = {
    username: "vibha",
    price : 199
}

function handleObjects(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjects(user)
handleObjects({
    username : "komal",
    price : 299
})

const myNewArray = [200,500,600,100]

function returnSecondValue(getArray){
        return getArray[1]
}

console.log(returnSecondValue(myNewArray));