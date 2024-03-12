// //Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//solution.


let current_users:string[]=["Ali","Zobia","Esha","kashan","zayna"];
let new_users:string[]=["Esha","Raina","zayna","Inaya"];

//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.


//Loop through the new_users list
for (const newUser of new_users) {

    //Make sure your comparison is case insensitive
    const isUsernameTaken = current_users.some((user) => user.toLowerCase() === newUser.toLowerCase());



    // see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.


    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
        console.log("the person will need to enter a new username. ")
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
//In this TypeScript example:

// current_users represents the existing usernames.
// new-users represents the usernames to be checked.
// The some function is used to check if any existing username matches the new username (case-insensitive).
// It prints a message indicating whether the username is already taken or available.
