//three keywords mainly used 1.let 2.const 3.var
// {}curly bracket indicate scopes.
//globalscopes means outside the if statements or any other loops.
//blocscopes means inside the the if statements or any other loops..

let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER : " , a);

}

//console.log(a);
//console.log(b);
// console.log(c);


function one() {
    const username = "vibha"
       function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()

}

//one()

if (true) {
    const username= "vibha"
    if (username === "vibha") {
        const website = " youtube"
        //console.log(username +  website);
    }
    //onsole.log(website);
}
//console.log(username);


5
//+++++++++++++++++++++++INTERESTING=++++++++++++++++++++++++++++++++==

console.log(addone(5))
function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
// this hole method is cslled hoisting.