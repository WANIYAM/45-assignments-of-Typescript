/*               QUESTION 10
 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, 
just add your name and the current date at the top of each program file.
 Then write one sentence describing what the program does.
 */

// first program 

// storing person's name as variable
let personName = "WANIYA";

let message = `Hello ${personName}, would you like to learn some Python today?`;

// printing message
console.log(message);

// second program


// Stripping Names: Store a person's name with whitespace characters, then print the name with and without whitespace.

let personNameWithWhitespace = "\t\n   Waniya Mustafa  \n\t"; // Define the name with whitespace characters

// Print the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);

// Strip the whitespace using trim()
let strippedName = personNameWithWhitespace.trim(); // Remove leading and trailing whitespace

// Print the name after stripping whitespace
console.log("Stripped name:", strippedName);
