/*              QUESTION 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
var dinnerGuests = ["Waniya", "Raza", "Ali"];
// Print an invitation message to each person in the list
for (var i = 0; i < dinnerGuests.length; i++)
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are  invited to dinner at my place."));
// console.log(`Dear ${dinnerGuests[0]},\nYou are  invited to dinner at my place.`);
// console.log(`Dear ${dinnerGuests[1]},\nYou are  invited to dinner at my place.`);
// console.log(`Dear ${dinnerGuests[2]},\nYou are  invited to dinner at my place.`);
