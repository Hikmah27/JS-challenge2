// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let js = "challenge";
console.log("30 Days Of Javascript", js);
// Print the string on the browser console using console.log()
let string = "Aishah";
console.log(string);
// Print the length of the string on the browser console using console.log()
console.log(string.length);
// Change all the string characters to capital letters using toUpperCase() method
console.log(string.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(string.toLowerCase());
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(string.substring(0, 1));
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let phrase = "30 Days Of JavaScript";
console.log(phrase.slice(3));
// Check if the string contains a word Script using includes() method
console.log(phrase.includes("Script"));
// Split the string into an array using split() method
console.log(js.split(" "));
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(phrase.split(" "));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let socialApps = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let socialSplit = socialApps.split(" ");
console.log(socialSplit);
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let phraseChange = phrase.replace("30 Days Of JavaScript", "30 Days Of Python");
console.log(phraseChange);
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(phrase.charAt(15));
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(phrase.charCodeAt("J"));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(phrase.indexOf("a"));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(phrase.lastIndexOf("a"));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let word = "You cannot end a sentence with because because because is a conjunction";
let wordIndex = word.indexOf("because");
console.log(wordIndex);
// Use lastIndexOf to find the position of the last occurrence of the word because
let wordLast = word.lastIndexOf("because");
console.log(wordLast);
// Use search to find the position of the first occurrence of the word because
console.log(word.search("because"));
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let wordTrim = " 30 Days Of JavaScript ";
console.log(wordTrim.trim());
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true 
console.log(phrase.startsWith(30));
console.log(phrase.endsWith("JavaScript"));
// Use match() method to find all the a’s in 30 Days Of JavaScript
let phraseMatch = phrase.match(/a/g);
console.log(phraseMatch);
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let merge = "30 Days of"
console.log(merge.concat(" JavaScript"));
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(phrase.repeat(2));