/*                QUESTION 13
 Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
 */
var favoriteTransportation = ["Tesla ", "Honda motorcycle", "BMW", "Porsche"];
// Print statements about each item in the list
for (var i = 0; i < favoriteTransportation.length; i++)
    console.log("I would like to own a ".concat(favoriteTransportation[i], "."));
// it will work like this 
// console.log(`I would like to own a ${favoriteTransportation[0]}.`);
// console.log(`I would like to own a ${favoriteTransportation[1]}.`);
// console.log(`I would like to own a ${favoriteTransportation[2]}.`);
// console.log(`I would like to own a ${favoriteTransportation[3]}.`);
