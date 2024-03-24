/*                             QUESTION 34
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just
the name of the pizza. For each pizza you should have one line of output containing a simple
statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you
like and then an additional sentence, such as I really love pizza!
*/
// Store the names of favorite pizzas in an array
var favoritePizzas = ['Margherita', 'Pepperoni', 'BBQ Chicken'];
// Loop through the array and print a sentence for each pizza
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print additional sentence expressing love for pizza
console.log("Pizza is one of my favorite foods. I really love pizza!");
