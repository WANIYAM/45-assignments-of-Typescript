/*                             QUESTION 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text
 of a message that should be printed on the shirt. The function should print a 
 sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

import * as readlineSync from 'readline-sync';

function make_shirt(): void {
    let size: string = readlineSync.question('Enter the size of the shirt (e.g., small, medium, large): ');
    let message: string = readlineSync.question('Enter the message to be printed on the shirt: ');

    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Call the function
make_shirt();
