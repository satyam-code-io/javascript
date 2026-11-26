let a =300

if (true) {
    let a = 10
    const b = 20
    // console.log(`INNER: ${a}`);
    
}


// console.log(a);
//console.log(b);
// console.log(c);


function one(){
    const userName = "satyam"

    function two(){
        const website = "youtube"
        console.log(userName);

    }
    // console.log(website);

    two()
}

one()

if(true) {
    const username = "Satyam"
    if(username === "Satyam"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);                            //error not access
}

// console.log(username);                              // error not access


// ++++++++++++++++++++++++ inserting +++++++++++++++++++++


console.log(addone(5));                      // new way to call a function

function addone(num){
    return num +1

}


console.log(addTwo(5));                         // ye error dega as declaration se 
                                             //pehle hosting is not possible

const addTwo = function(num){
    return num + 2
}

addTwo(5)