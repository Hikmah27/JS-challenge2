// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const phrase = "Love is the best thing in this world. Some found their love and some are still looking for their love."
const count = phrase.match(/love/gi).length;
console.log(count);
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const quotePhrase = "You cannot end a sentence with because because because is a conjunction";
const countPhrase = quotePhrase.match(/because/gi).length;
console.log(countPhrase);
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// Clean the text
const cleanedText = sentence
  .replace(/[%$@&;#]/g, '')  // Remove unwanted characters
  .replace(/\s+/g, ' ')      // Replace multiple spaces with a single space
  .toLowerCase();            // Convert to lower case for uniformity

// Split into words
const words = cleanedText.split(' ');

// Count word frequencies
const wordCount = {};
words.forEach(word => {
  if (word) { // Check if the word is not empty
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
});

// Find the most frequent word
let mostFrequentWord = '';
let maxCount = 0;

for (const word in wordCount) {
  if (wordCount[word] > maxCount) {
    maxCount = wordCount[word];
    mostFrequentWord = word;
  }
}

console.log(`The most frequent word is: "${mostFrequentWord}" with a count of ${maxCount}.`);
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers using regular expressions
const monthlySalary = parseInt(text.match(/(\d+)\s*euro\s*from\s*salary\s*per\s*month/)[1]);
const annualBonus = parseInt(text.match(/(\d+)\s*euro\s*annual\s*bonus/)[1]);
const onlineCoursesIncome = parseInt(text.match(/(\d+)\s*euro\s*online\s*courses\s*per\s*month/)[1]);

// Calculate total annual income
const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (onlineCoursesIncome * 12);

console.log(`The total annual income is: ${totalAnnualIncome} euro.`);