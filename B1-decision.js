// B1: IF / ELSE

// Question:
// Write decision(marks) that returns "Competent"
// when marks are 70 or more, otherwise "Not yet competent".
// Test with 70 and 69.

// Answer:

function decision(marks) {
    if (marks >= 70) {
        return "Competent";
    } else {
        return "Not yet competent";
    }
}

// Testing
console.log(decision(70));
console.log(decision(69));
