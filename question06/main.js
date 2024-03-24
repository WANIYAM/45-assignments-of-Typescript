/*                       QUESTION 6
Stripping Names: Store a person’s name,and include some whitespace characters
at the beginning and end of the name. Make sure you use each character combination,
 "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
 Then print the name after striping the white spaces.
 */
var personNameWithWhitespace = "\t\n   Waniya Mustafa  \n\t";
// Print the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);
// Strip the whitespace using trim()
var strippedName = personNameWithWhitespace.trim();
// Print the name after stripping whitespace
console.log("Stripped name:", strippedName);
