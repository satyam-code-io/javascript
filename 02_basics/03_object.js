// singleton

// object literals

//object literals

const mySum = Symbol("key1")


const JsUser = {
    name: "Satyam",
    "full name": "satyam choudhary",
    [mySum]: "key1",
    age: 19,
    location: "jaipur",
    email: "satyam@goggle.com",
    isLoggedIn: false,
    lastLoginInDays: ["Mondays", "Saturday"]


}

// access of objects:-

console.log(JsUser.email);   // very cheap method failed to access full name then below method work
console.log(JsUser["email"]);
console.log(JsUser["full name"]);  // remember all this major we access by dot but some special case
console.log(JsUser[mySum]);


JsUser.age = "18"
//Object.freeze(JsUser)

JsUser.email = "choudharysatyam54@goggle.com"
// Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(JsUser.greeting());             // if after greetingnot we used () this then it return
                                             // function(anonomyous)
console.log(JsUser.greetingTwo()); 
  



