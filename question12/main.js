/*                   QUESTION 12
Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be
 personalized with the person’s name.
 */
var names = ["Ali", "Sara", "Waniya", "Saba"];
// Print a personalized message to each person
for (var i = 0; i < names.length; i++)
    console.log("Hello ".concat(names[i], ", I hope you're having a great day!"));
// console.log(`Hello ${names[0]}, I hope you're having a great day!`);
// console.log(`Hello ${names[1]}, I hope you're having a great day!`);
// console.log(`Hello ${names[2]}, I hope you're having a great day!`);
// console.log(`Hello ${names[3]}, I hope you're having a great day!`);
