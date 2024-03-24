/*                         QUESSTION 43
Unchanged Magicians: Start with your work from Exercise 40. Call the function 
make_great() with a copy of the array of magicians’ names. Because the original 
array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name.
*/


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

// Create an array of magician's names
const magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call make_great function with a copy of the original array
const great_magicians: string[] = make_great([...magician_names]);

// Call the show_magicians function with both arrays to show the original and modified lists
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
