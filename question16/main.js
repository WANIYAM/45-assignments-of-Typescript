/*                   QUESTION 16
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var dinnerGuests = ["Waniya", "Raza", "Ali"];
// Remove the guest who can't make it and add a new guest
var guestWhoCantMakeIt = "Ali";
var newGuest = "Wardah ";
// Replace the guest who can't make it with the new guest
var updatedGuestList = dinnerGuests.join(',').replace(guestWhoCantMakeIt, newGuest);
dinnerGuests = updatedGuestList.split(',');
// Add one new guest to the beginning of the array
dinnerGuests.unshift("Sara");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Saba");
// Use push() to add one new guest to the end of the list
dinnerGuests.push("Saif");
// Print invitation messages to each person in the updated list
for (var i = 0; i < dinnerGuests.length; i++)
    console.log("Dear  ".concat(dinnerGuests[i], ",\n I have a good news I have found a bigger dinner table so...\nYou are  invited to dinner at my place."));
