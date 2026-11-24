let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)    //guarantee it is a number but it needs a reality check because in js it convert even it is 33abc and shows the number but it is not

console.log(typeof valueInNumber);    
console.log(valueInNumber);          //see it is showing NaN it is not a number


"33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" =>false
//"satyam" => true

let someNumber=33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);


