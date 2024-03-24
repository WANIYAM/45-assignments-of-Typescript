/*                              QUESTION 42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function
 called make_great() that modifies the array of magicians by adding the phrase the
Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.
 */
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Create an array of magician's names
var magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call make_great function to modify the magician_names array
magician_names = make_great(magician_names);
// Call the show_magicians function to see the modified list
show_magicians(magician_names);
