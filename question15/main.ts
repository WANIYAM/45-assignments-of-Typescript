/*               QUESTION 15
Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
*/

let dinnerGuests: string[] = ["Waniya", "Raza", "Ali"];

// Remove the guest who can't make it and add a new guest
let guestWhoCantMakeIt: string = "Ali";
let newGuest: string = "Wardah ";

// Replace the guest who can't make it with the new guest
let updatedGuestList: string = dinnerGuests.join(',').replace(guestWhoCantMakeIt, newGuest);
dinnerGuests = updatedGuestList.split(',');

// Print invitation messages to each person in the updated list
for (let i=0; i< dinnerGuests.length; i++ )
console.log(`Dear ${dinnerGuests[i]},\nYou are  invited to dinner at my place.`);
 