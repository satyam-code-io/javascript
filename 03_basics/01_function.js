// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("t");
//     console.log("y");
//     console.log("a");
//     console.log("m");
// }
// sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

//  function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
    
// }

// const result = addTwoNumbers(3, 4)

// console.log(result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("plese enter a usename");
//         return

//     }
//     return `${username} just logged in`

// }

// console.log(loginUserMessage("satyam"))
// console.log(loginUserMessage())


// function calculateCartPrice(val1, val2, ...num1){             //isse aage ke 2 print nhi honge
//     return num1

// }
// console.log(calculateCartPrice(200, 400, 500));

// const user = {
//     username: "satyam choudhary",
//     price: 199
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 309

// })

const myNewArray = [200, 400, 100, 600]

function secondValue(array){

    return array[1]
}

console.log(secondValue(myNewArray));