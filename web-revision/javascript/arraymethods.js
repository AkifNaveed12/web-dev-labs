const destinations = [
    { name: "Skardu", cost: 55000 },
    { name: "Hunza", cost: 42000 },
    { name: "Murree", cost: 16000 },
    { name: "Swat", cost: 32000 }
];

const results = destinations.filter(function (destination) {
    return destination.cost < 40000;
});

console.log(results);
const Results = destinations.filter(d => d.cost < 40000);
console.log(Results)

const names = destinations.map(d => d.name);

console.log(names);
// ["Skardu", "Hunza", "Murree", "Swat"]

const total = destinations.reduce(
    (sum, d) => sum + d.cost,
    0
);

console.log(total); // 145000