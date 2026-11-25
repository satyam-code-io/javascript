// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocalString());

// let myCreatedDatte = new Date(2026,0,23)  // first method
// let myCreatedDate = new Date(2026,0,23,5,3) //another one
// let myCreatedDates = new Date("2023-01-14") // another one
let myDates = new Date("01-14-2023")       // another one


// console.log(myDates.toLocalString());
// console.log(myCreatedDates.toLocalString());
// console.log(myDate.toLocalString(myCreatedDate));
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDates.getTime());    // jo date declare kiya uska mili sec se compare
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getday() + 1);


newDate.toLocaleString('default', {
    weekday: "long",                              // plz remember this thing
})