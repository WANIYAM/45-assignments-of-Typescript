/*                 QUESTION 3
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.
*/
let PersonName = "WANIYA MUSTAFA"

// CONVERT INTO LOWERCASE
let lowercase= PersonName.toLowerCase();
console.log ("Lowercase :",lowercase);

// CONVERT INTO UPPERCASE
let uppercase= PersonName.toUpperCase();
console.log ("Uppercase :",uppercase);

// CONVERT INTO TITLECASE
let titlecase= lowercase.replace(/\b\w/g, c => c.toUpperCase()) ;
console.log ("Titlecase :",titlecase);

