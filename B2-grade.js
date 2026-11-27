/ B2: ELSE IF

// Question:
// Write grade(marks) using the given grading scale.
// Marks below 0 or above 100 return "Invalid".
// Test with all the values in the table.

// Answer:

function grade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "E";
    }
}

// Testing
console.log(grade(95));
console.log(grade(80));
console.log(grade(79));
console.log(grade(65));
console.log(grade(50));
console.log(grade(49));
console.log(grade(101));
console.log(grade(-5));
