/*                     QUESTION 29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits: string[] = ['banana', 'apple', 'orange'];

if (favorite_fruits.indexOf('banana') !== -1) {
    console.log("You really like bananas!");
}

if (favorite_fruits.indexOf('apple') !== -1) {
    console.log("You really like apples!");
}

if (favorite_fruits.indexOf('orange') !== -1) {
    console.log("You really like oranges!");
}

if (favorite_fruits.indexOf('strawberry') !== -1) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.indexOf('kiwi') !== -1) {
    console.log("You really like kiwis!");
}


