
"use strict";

// 1. Reusable total and average functions
function total(...values) {
    return values.reduce((sum, value) => sum + value, 0);
}

function average(...values) {
    if (values.length === 0) return 0;

    return total(...values) / values.length;
}

const marks = [78, 45, 90, 60];

console.log("Total:", total(...marks));
console.log("Average:", average(...marks).toFixed(2));

// 2. Two independent counters using closures
function createCounter(start = 0) {
    let count = start;

    return {
        next: () => ++count,
        current: () => count
    };
}

const first = createCounter();
const second = createCounter(10);

console.log("\nFirst counter:", first.next());   // 1
console.log("First counter:", first.next());     // 2
console.log("Second counter:", second.next());   // 11
console.log("First current:", first.current());  // 2
console.log("Second current:", second.current());// 11

// 3. Array destructuring and rest
const [firstMark, secondMark, ...remainingMarks] = marks;

console.log("\nFirst mark:", firstMark);
console.log("Second mark:", secondMark);
console.log("Remaining marks:", remainingMarks);

// 4. Object destructuring
const student = {
    name: "Ayesha",
    programme: "BSCS"
};

const { name, programme } = student;

// 5. call(), apply(), and bind()
function introduce(prefix) {
    return `${prefix} ${this.name} (${this.programme})`;
}

console.log("\n" + introduce.call(student, "Welcome"));
console.log(introduce.apply(student, ["Hello"]));

const introduceStudent = introduce.bind(student, "Student:");
console.log(introduceStudent());
