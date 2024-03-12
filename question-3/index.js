// //Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var suffix1 = "st";
var suffix2 = "nd";
var suffix3 = "rd";
var suffix4 = "th";
numbers.forEach(function (element) {
    if (element === 1) {
        console.log("i".concat(suffix1));
    }
    else if (element === 2) {
        console.log("2 ".concat(suffix2));
    }
    else if (element === 3) {
        console.log("3 ".concat(suffix3));
    }
    else {
        console.log("".concat(element, " ").concat(suffix4));
    }
});
