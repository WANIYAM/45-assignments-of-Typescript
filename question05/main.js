/*                     QUESTION 5
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
 in a variable called famous_person. Then compose your message and store it in a new variable
called message. Print your message.
*/
var famousPersonName = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
var message = "".concat(famousPersonName, " once said , \"").concat(quote, "\"");
console.log(message);
