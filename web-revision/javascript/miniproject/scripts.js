const destinations = [
    { name: "Skardu", days: 5, cost: 55000 },
    { name: "Hunza", days: 4, cost: 42000 },
    { name: "Kumrat Valley", days: 3, cost: 28000 },
    { name: "Gwadar", days: 4, cost: 45000 },
    { name: "Murree", days: 2, cost: 16000 },
    { name: "Swat", days: 3, cost: 32000 }
];

const search = document.getElementById("search");
const cards = document.getElementById("cards");
const total = document.getElementById("total");
const message = document.getElementById("message");
const sortBtn = document.getElementById("sortBtn");

let sortActive = false;

function updateExplorer() {
    const query = search.value.toLowerCase();

    // 1. Search using filter()
    let displayed = destinations.filter(d =>
        d.name.toLowerCase().includes(query)
    );

    // 2. Sort a copy, keeping the original array unchanged
    if (sortActive) {
        displayed = [...displayed].sort(
            (a, b) => a.cost - b.cost
        );
    }

    // 3. Calculate total using reduce()
    const totalCost = displayed.reduce(
        (sum, d) => sum + d.cost,
        0
    );

    total.textContent =
        `Total Estimated Cost: PKR ${totalCost.toLocaleString()}`;

    // 4. Handle no matches
    if (displayed.length === 0) {
        cards.innerHTML = "";
        message.textContent = "No destinations match your search.";
        return;
    }

    message.textContent = "";

    // 5. Generate cards using map()
    cards.innerHTML = displayed.map(d => `
        <article class="card">
            <h2>${d.name}</h2>
            <p>${d.days} Days</p>
            <p class="cost">
                PKR ${d.cost.toLocaleString()}
            </p>
        </article>
    `).join("");
}

// Update results while typing
search.addEventListener("input", updateExplorer);

// Toggle ascending sort
sortBtn.addEventListener("click", function () {
    sortActive = !sortActive;

    sortBtn.textContent = sortActive
        ? "Disable Sorting"
        : "Sort by Cost";

    updateExplorer();
});

// Initial call
updateExplorer();