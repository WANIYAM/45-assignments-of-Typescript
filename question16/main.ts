/*                   QUESTION 16
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/


let dinnerGuests: string[] = ["Waniya", "Raza", "Ali"];

// Remove the guest who can't make it and add a new guest
let guestWhoCantMakeIt: string = "Ali";
let newGuest: string = "Wardah ";

// Replace the guest who can't make it with the new guest
let updatedGuestList: string = dinnerGuests.join(',').replace(guestWhoCantMakeIt, newGuest);
dinnerGuests = updatedGuestList.split(',');

// Add one new guest to the beginning of the array
dinnerGuests.unshift("Sara");

// Add one new guest to the middle of the array
let middleIndex: number = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Saba");

// Use push() to add one new guest to the end of the list
dinnerGuests.push("Saif");

// Print invitation messages to each person in the updated list
for (let i=0; i< dinnerGuests.length; i++ )
console.log(`Dear  ${dinnerGuests[i]},\n I have a good news I have found a bigger dinner table so...\nYou are  invited to dinner at my place.`);
