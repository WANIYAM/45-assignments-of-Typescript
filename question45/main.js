/*                         QUESTION 45
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. Call
the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to
 make sure all the information was stored correctly.
*/
function storeCarInfo(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        car[arg[0]] = arg[1];
    }
    return car;
}
// Call the function with required information and two other name-value pairs
var carInfo = storeCarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
// Print the object returned to ensure all information was stored correctly
console.log(carInfo);
