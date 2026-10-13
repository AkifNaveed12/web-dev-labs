
"use strict";

const rawMarks = ["78", "45", "90", "60"];
const marks = [];

let total = 0;

// 1. Convert strings to numbers using for...of
for (const raw of rawMarks) {
    const value = Number(raw);

    // Validation and error handling
    if (
        raw.trim() === "" ||
        !Number.isFinite(value) ||
        value < 0 ||
        value > 100
    ) {
        throw new Error(`Invalid mark: ${raw}`);
    }

    marks.push(value);
    total += value;
}

// 2. Calculate average
const average = total / marks.length;

// 3. Determine result category using switch
let result;
const category = average >= 80 ? 3 : average >= 50 ? 2 : 1;

switch (category) {
    case 3:
        result = "Excellent";
        break;

    case 2:
        result = "Pass";
        break;

    case 1:
        result = "Needs Improvement";
        break;

    default:
        result = "Invalid Category";
}

// 4. Display total, average, and result
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Result: ${result}`);

// 5. Report every mark using while
console.log("\nStudent Marks:");

let index = 0;

while (index < marks.length) {
    console.log(`Student ${index + 1}: ${marks[index]}`);
    index++;
}

// 6. Demonstrate do...while
console.log("\nMarks using do...while:");

let i = 0;

do {
    console.log(`Mark ${i + 1}: ${marks[i]}`);
    i++;
} while (i < marks.length);
