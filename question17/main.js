/*                       QUESTION 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list,
 print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.
*/
var dinnerGuests = ["Sara", "Waniya", "Saba", "Raza", "Wardah", "Saif"];
// Print a message saying that you can invite only two people for dinner
console.log("Sorry, we can only invite two people for dinner.\n");
// Remove extra guests from the list directly
var removedGuests = dinnerGuests.splice(2);
// Print messages to removed guests
for (var i = 0; i < removedGuests.length; i++)
    console.log("Sorry ".concat(removedGuests[i], ",\nDue to the delay in the dinner table arrival, we can't accommodate you for dinner."));
// Print a message to each of the two people still on your list
for (var i = 0; i < dinnerGuests.length; i++)
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are still invited to dinner."));
// Remove the last two names from your list
dinnerGuests.pop();
dinnerGuests.pop();
// Print the final list to ensure it's empty
console.log("Final guest list:", dinnerGuests);
