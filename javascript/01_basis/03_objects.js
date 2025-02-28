// two types of objects (1)literal (2)constructor litereal se kabhhi singleton nahibanta constructor se banate ho to banta hai.

//object literal

const Mysym = Symbol("key1")
const JsUser = {
    name : "vibha",
    "fullname" : "vibha bhisikar",
    Mysym : "mykey1",
    age : 20,
    location : "ahmedabad",
    email : "vibha@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday"],

}

// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(typeof JsUser.Mysym)
// console.log(JsUser[Mysym])

// JsUser.email = "vibha@chatgpt.com",
// //Object.freeze(JsUser)
// JsUser.email = "vibha@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello JS users");
// }
// console.log(JsUser.greeting());

//PART II 

// objects singleton with the help of constructor

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "vibha"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userfullname : {
            firstname : "vibha",
            lastname : "bhisikar"
        }
    } 
}

// console.log(regularUser.fullname);
// console.log(tinderUser);

//keys=number, value =alphabets

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
// const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1 , obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3); 

const users = [
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:1,
        email:"v@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

//destructuring of objects

const course = {
    courseName : "js in hindi",
    prise : "999",
    courseInstructor : "vibha",
}

const {courseInstructor} = course
// console.log(courseInstructor);