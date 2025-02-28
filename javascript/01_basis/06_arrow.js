// further about arrow function
// THIS. refers to current context.
//ARROW FUNCTION ISLIKE THIS () => {}

const user = {
    username : "vibhu",
    price : 199,

    welcomeMessage : function(){
        //console.log(`${this.username} , welcome to website`)
        //console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "disha"
// user.welcomeMessage()


// function chai(){
//     let username = "vibha"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "vibha"
    console.log(this);
}

//chai()

// const addTwo = (num1 ,  num2 ) => {
//     return num1 + num2
// }
//applying implicit method .when we use {}brackets then write return function but while using paranthesis not to use return function .
const addTwo = (num1 ,  num2 ) =>  num1 + num2
console.log(addTwo(3,4))