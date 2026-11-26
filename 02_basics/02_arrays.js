const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes)     //Method1 to merge two array in a single-one

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  // Method2 

console.log(all_new_heroes);
console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [9, 8, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("satyam"));
console.log(Array.from("Satyam"));
console.log(Array.from({name: "Satyam"}));   //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
