// array

const myArray = [0, 1, 2, 3, 4, 5]   // basis way to declare

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);

// Array methods

// myArray.push(6)
// myArray.pop()

myArray.unshift(9)           // push the element at first 
myArray.shift()              // 0th index element remove 

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArr =myArray.join()       // add all element  into string

console.log(myArray);
console.log(newArr);

// Slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)            //it doesn't include range but it not affect the original array

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)          // it cludes range as well as it affect the originaal array and remove the
// element from original one

console.log("c ", myArray);
console.log(myn2);