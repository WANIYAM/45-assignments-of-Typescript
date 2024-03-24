/*                 QUESTION 3
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.
*/
var PersonName = "WANIYA MUSTAFA";
// CONVERT INTO LOWERCASE
var lowercase = PersonName.toLowerCase();
console.log("Lowercase :", lowercase);
// CONVERT INTO UPPERCASE
var uppercase = PersonName.toUpperCase();
console.log("Uppercase :", uppercase);
// CONVERT INTO TITLECASE
var titlecase = lowercase.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log("Titlecase :", titlecase);
