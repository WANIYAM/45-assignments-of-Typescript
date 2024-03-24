/*                             QUESTION 32
Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new
usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username.
 If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    // Convert both new and current usernames to lowercase for case-insensitive comparison
    var newUserLower = newUser.toLowerCase();
    var isTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var currentUser = current_users_1[_a];
        if (currentUser.toLowerCase() === newUserLower) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
}
