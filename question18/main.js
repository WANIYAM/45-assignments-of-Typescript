/*
                            QUESTION 18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Japan", "Italy", "Australia", "Canada", "Brazil"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
var sortedArray = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedArray);
// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);
// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);
// Reverse the order of the list
placesToVisit = placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again
placesToVisit = placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
