/*                              QUESTION 42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function
 called make_great() that modifies the array of magicians by adding the phrase the
Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.
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
let magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call make_great function to modify the magician_names array
magician_names = make_great(magician_names);

// Call the show_magicians function to see the modified list
show_magicians(magician_names);
