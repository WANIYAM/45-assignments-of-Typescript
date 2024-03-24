
/*                         QUESTION 45
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. Call 
the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to
 make sure all the information was stored correctly.
*/
function storeCarInfo(manufacturer: string, model: string, ...args: [string, any][]): any {
    const car: any = {
        manufacturer,
        model
    };

    for (const arg of args) {
        car[arg[0]] = arg[1];
    }

    return car;
}

// Call the function with required information and two other name-value pairs
let carInfo = storeCarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);

// Print the object returned to ensure all information was stored correctly
console.log(carInfo);
