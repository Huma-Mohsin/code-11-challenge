// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usersname = ["zaynah", "laraib", "asma", "noorie"];
usersname.forEach(function (element) {
    if (element.length !== 0) {
        console.log("Great you are a user ".concat(element));
    }
    else {
        console.log("we need to find some users");
    }
});
