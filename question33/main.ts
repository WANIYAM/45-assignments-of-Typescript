/*                                    QUESTION 33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.
*/

// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (const number of numbers) {
    let ordinal: string;

    // Determine the ordinal representation
    if (number === 1) {
        ordinal = '1st';
    } else if (number === 2) {
        ordinal = '2nd';
    } else if (number === 3) {
        ordinal = '3rd';
    } else {
        ordinal = `${number}th`;
    }

    // Output the ordinal representation
    console.log(`The ordinal representation of ${number} is ${ordinal}.`);
}
