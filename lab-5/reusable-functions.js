function total(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

function average(...marks) {
    if (marks.length === 0) return 0;

    return total(...marks) / marks.length;
}

console.log(total(78, 45, 90, 60));   // 273
console.log(average(78, 45, 90, 60)); // 68.25

function createCounter(start = 0) {
    let count = start;

    return {
        next: () => ++count,
        current: () => count
    };
}

const first = createCounter();
const second = createCounter(10);

console.log(first.next());  // 1
console.log(first.next());  // 2
console.log(second.next()); // 11
console.log(first.current());  // 2
console.log(second.current()); // 11

const marks = [78, 45, 90, 60];

// Spread: expand the array into arguments
console.log(total(...marks));
console.log(average(...marks));

// Array destructuring
const [firstMark, secondMark, ...remainingMarks] = marks;

console.log(firstMark);       // 78
console.log(secondMark);      // 45
console.log(remainingMarks);  // [90, 60]

// Object destructuring
const student = {
    name: "Ayesha",
    programme: "BSCS"
};

const { name, programme } = student;

console.log(name);      // Ayesha
console.log(programme); // BSCS

function introduce(prefix) {
    return `${prefix} ${this.name} (${this.programme})`;
}

console.log(introduce.call(student, "Welcome"));

console.log(introduce.apply(student, ["Hello"]));

const introduceStudent = introduce.bind(student, "Student:");
console.log(introduceStudent());