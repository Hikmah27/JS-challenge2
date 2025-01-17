console.log("\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numbs = 10;
let numbsInt = parseInt(numbs)
console.log(numbsInt);
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
let numF = 9.8;
let numFloat = Number(numF);
console.log(Math.round(numFloat));
// Check if 'on' is found in both python and jargon
let word = "python, Jargon";
console.log(word.match(/on/g));
// I hope this course is not full of jargon. Check if jargon is in the sentence.
let course = "I hope this course is not full of jargon.";
console.log(course.includes("jargon"));
// Generate a random number between 0 and 100 inclusively.
const rand = Math.floor(Math.random() * 100)
// const rand = Math.random() * 100;
console.log(rand);
// Generate a random number between 50 and 100 inclusively.
const randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomNumber);
// Generate a random number between 0 and 255 inclusively.
const figures = Math.floor(Math.random() * 255)
console.log(figures);
// Access the 'JavaScript' string characters using a random number.
const str = "Javascript";
const randomIndex = Math.floor(Math.random() * str.length);
const randomCharacter = str[randomIndex];
console.log(`Random Character: ${randomCharacter}`);
// Use console.log() and escape characters to print the following pattern.// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = "You cannot end a sentence with because because because is a conjunction";
const startIndex = sentence.indexOf("because because because")
const slicedPhrase = sentence.substr(startIndex, "because because because".length)
console.log(slicedPhrase);