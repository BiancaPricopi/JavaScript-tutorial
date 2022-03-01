//var, let, const
//let locale, var globale
//good practice: let + const

let isMinor = true; //boolean
console.log(typeof(isMinor));

let n = null;
console.log(typeof(n));

let undf = undefined;
console.log(typeof(undf)); //variabile nedefinite

let num = 120;
console.log(typeof(num));

let str = "hello";
console.log(typeof(str));

//obiect 
let person = {
    age : 20,
    name : "Bogdan"
}
console.log(person);

//array
const hobbies = ["sport", "reading", "cooking", "coding maybe"];
const prices = [22.99, 1.8, 10.99];
console.log(hobbies);
console.log(prices);

const biking = hobbies[1];

let person2 = {
    age : 10,
    name : "Stef"
}

const persons = [person, person2];
console.log(persons);
const student = [{id : "RSL23", grade : 10}, {id : "RSL24", grade : 9}]; //inline
console.log(student);