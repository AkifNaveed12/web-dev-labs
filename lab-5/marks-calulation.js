
"use strict";

const name = prompt("Enter student's name:");

const marks1 = Number(prompt("Enter marks for Subject 1:"));
const marks2 = Number(prompt("Enter marks for Subject 2:"));
const marks3 = Number(prompt("Enter marks for Subject 3:"));

// Calculate total and average
const total = marks1 + marks2 + marks3;
const average = total / 3;

// Check pass or fail (assuming 50% is passing)
let result;

if (average >= 50) {
    result = "Passed";
} else {
    result = "Failed";
}

// Display results
console.log("Student Name:", name);
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Result:", result);
