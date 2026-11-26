//const tinderUser = new Object()               //Singelton object
const tinderUser={}                             // non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
                                      
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satyam",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2 }      bware to do such thing it become nested object


//method 1 for combining:-

const obj3 = {... obj1, ... obj2}
// console.log(obj3);


// Method 2 for combining:-
const obje3 = object.assign(obj1,obj2)
//console.log(obje3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id2: 2,
        email2: "S@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(object.keys(tinderUser));
console.log(object.keys(tinderUser));
console.log(object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"))      // to check this property has or not



// destructure:-

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseStudent: "Satyam"
}
// course.courseStudent

const {courseStudent: student} = course               //means not calling large repeated words

// console.log(courseStudent);
console.log(student);

// {
//     "name": "Satyam",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
    
]