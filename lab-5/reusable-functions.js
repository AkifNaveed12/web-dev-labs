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