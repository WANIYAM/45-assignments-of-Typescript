/*               QUESTION 15
Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
var dinnerGuests = ["Waniya", "Raza", "Ali"];
// Remove the guest who can't make it and add a new guest
var guestWhoCantMakeIt = "Ali";
var newGuest = "Wardah ";
// Replace the guest who can't make it with the new guest
var updatedGuestList = dinnerGuests.join(',').replace(guestWhoCantMakeIt, newGuest);
dinnerGuests = updatedGuestList.split(',');
// Print invitation messages to each person in the updated list
for (var i = 0; i < dinnerGuests.length; i++)
    console.log("Dear ".concat(dinnerGuests[i], ",\nYou are  invited to dinner at my place."));
