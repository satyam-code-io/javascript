const accountId=144553
let accountEmail="chaudharysatyam1001@gamil.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2 //Not allowed to change 
accountEmail="hc12@gmail.com"
accountPassword="1234443"
accountCity="Pune"     //not a good way to declare a variable
let accountState;

console.log(accountId);

// prefer not to use var because of issue
// in block scope and function


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
