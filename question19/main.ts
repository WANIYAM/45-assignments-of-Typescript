/*              QUESTION 19 
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.
*/

let dinnerGuests: string[] = ["Sara", "Waniya", "Saba", "Raza", "Wardah", "Saif"];

// Remove extra guests from the list directly
let removedGuests = dinnerGuests.splice(2);

// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);
