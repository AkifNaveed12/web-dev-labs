
const form = document.getElementById("booking-form");
const confirmation = document.getElementById("confirmation");
const dateInput = document.getElementById("date");


const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

// Handle form submission.
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedEvent = document.getElementById("event").value;
    const date = dateInput.value;
    const tickets = document.getElementById("tickets").value;

    if (!name || !email || !selectedEvent || !date || !tickets) {
        confirmation.textContent = "Please fill in all fields.";
        return;
    }

    confirmation.textContent =
        `Booking request submitted successfully! ${name}, ` +
        `your request for ${tickets} ticket(s) to ${selectedEvent} ` +
        `on ${date} has been received.`;

    form.reset();

    // Keep the minimum date after resetting the form.
    dateInput.min = `${year}-${month}-${day}`;
});
