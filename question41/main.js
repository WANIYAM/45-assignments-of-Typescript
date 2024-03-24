/*                                     QUESTION 41
Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array.

*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician's names
var magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the show_magicians function and pass the array to it
show_magicians(magician_names);
