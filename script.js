let numbers = [1, 2, 3];
numbers[0] = 20;
console.log(numbers);

let nums = [3, 4, 5, 6]
let numbs = [3, 4, 5, 6]
console.log(nums == numbs);

let userThree = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}
let userFour = userThree
console.log(userThree == userFour)

const PI = Math.PI
console.log(PI) 
console.log(Math.round(PI));
console.log(Math.ceil(PI));
console.log(Math.floor(PI));
console.log(Math.min(0,-2.5, 5, 60, 7, -0.08));
console.log(Math.max(0,-2.5, 5, 60, 7, -0.08, 100));

// creates random number between 0 and 10
const rand = Math.floor(Math.random() * 11)
console.log(rand);

console.log(Math.sqrt(100));
console.log(Math.abs(-20));
console.log(Math.pow(4,2));
console.log(Math.E);
console.log(Math.log(10));

// // generates random numbers from 0 to 0.999..
const randomNumber = Math.random()
console.log(randomNumber);
let randToSix = randomNumber * 6
console.log(randToSix);
let randToFloor = Math.floor(randToSix)
console.log(randToFloor);

console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t \t correct in 2020')
console.log("Day 1\t2\t 5");
console.log("I am enjoying 30days of javascript challenge, \nand you?");

let first_name = "Kike";
let last_name = "Siyanbola";
let city = "Lagos";
let fullName = first_name + " " + last_name
let firstPerson = `My name is ${fullName}, i live in ${city}`
console.log(firstPerson);

let string = "Javascript";
console.log(string.length);
console.log(string[1]);
console.log(string.substring(2,8));

let js = " 30 days of Javascript"
console.log(js.charAt(4));
let lastIndex = js.length - 1
console.log(js.charAt(lastIndex));
console.log(js.charCodeAt(5));
console.log(js.indexOf('days'));
console.log(js.indexOf("40"));
console.log(js.lastIndexOf("of"));
console.log(js.search("of"));
console.log(js.match(("days")));


console.log(js.split());
console.log(js.split(" "));
console.log(js.includes("days")); // true- it checks if it is available
console.log(js.includes(40));
console.log(js.trim()); // it removes trailing
console.log(js.replace("Javascript", "Python"));

let practice = "30";
console.log(practice.concat(" days ", "of"," javascript"));
console.log(practice.startsWith("30"));
console.log(js.endsWith("Javascript"));
console.log(practice.repeat("3"));

// Converting String Number to Integer
let pracInt = parseInt(practice);
console.log(pracInt);
let practInt = Number(practice);
console.log(practInt);
let practiceInt = +practice;
console.log(practiceInt);

// Converting String float numbers to float numbers
let num = 9.89;
// let numFloat = parseFloat(num) // or
// let numsFloat = Number(num) // or
let numbFloat = +num;
console.log(numbFloat);

// Converting Float numbers to Integers
let numInt = parseInt(num);
console.log(numInt);