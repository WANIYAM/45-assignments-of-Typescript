/*                   QUESTION 24 
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one
  False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

// Tests for equality and inequality with strings
let string1: string = 'hello';
let string2: string = 'Hello';

console.log("Is 'hello' == 'Hello'? I predict False.");
console.log(string1 == string2);

console.log("Is 'hello' != 'Hello'? I predict True.");
console.log(string1 != string2);

// Tests using the lower case function
let uppercaseString: string = 'HELLO';
let lowercaseString: string = 'hello';

console.log("Is 'HELLO' converted to lowercase equal to 'hello'? I predict True.");
console.log(uppercaseString.toLowerCase() == lowercaseString);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1: number = 10;
let number2: number = 20;

console.log("Is 10 < 20? I predict True.");
console.log(number1 < number2);

console.log("Is 10 <= 20? I predict True.");
console.log(number1 <= number2);

console.log("Is 10 > 20? I predict False.");
console.log(number1 > number2);

console.log("Is 10 >= 20? I predict False.");
console.log(number1 >= number2);

// Tests using "and" and "or" operators
let a: boolean = true;
let b: boolean = false;

console.log("Is true and false? I predict False.");
console.log(a && b);

console.log("Is true or false? I predict True.");
console.log(a || b);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.indexOf('apple') !== -1);

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf('grape') === -1);
