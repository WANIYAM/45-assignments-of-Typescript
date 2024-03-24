/*                           QUESTION 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
 message, and a shirt of any size with a different message.
*/

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("medium");

// Create a shirt of any size with a different message
make_shirt("small", "Hello, World!");
