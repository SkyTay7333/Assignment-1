// Initialize the dark mode state
let darkMode = false;

// Add an event listener to the dark mode button
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the dark mode state
    darkMode = !darkMode;

    // Get the <body> element
    const body = document.body;

    // Toggle dark mode styles on the <body> element
    body.classList.toggle("dark-mode", darkMode);

    // Get the dark mode button element
    const darkModeButton = document.getElementById("darkModeToggle");

    // Update the button text based on the dark mode state
    darkModeButton.textContent = darkMode ? "Light Mode" : "Dark Mode";
}

let concertData; // Declare a global variable to store concert data

document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the JSON file
    fetch("concert-data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Save concert data globally
            concertData = data;

            // Call a function to render the concert details
            renderConcerts(data.UpcomingConcerts);
        })
        .catch(error => console.error("Error fetching data:", error));

    // Add an event listener for the filter form
    const filterForm = document.getElementById("filterForm");
    filterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        applyFilters();
    });
});

function renderConcerts(concerts) {
    const concertDetailsSection = document.getElementById("concertDetails");

    // Clear existing concert cards
    concertDetailsSection.innerHTML = "";

    // Loop through each concert in the data and create a div for each
    concerts.forEach(concert => {
        const concertDiv = document.createElement("div");
        concertDiv.classList.add("concert-details");

        concertDiv.innerHTML = `
            <h3>${concert.title}</h3>
            <p><strong>Date:</strong> ${concert.date}, ${concert.time}</p>
            <p><strong>Location:</strong> ${concert.location}</p>
            <p>${concert.description}</p>
            <p><strong>Ticket Price:</strong> $${concert.ticketPrice.toFixed(2)}</p>
            <p><strong>Tickets Available:</strong> ${concert.ticketsAvailable}</p>
            <button onclick="buyTickets(${concert.id})">Buy Tickets</button>
        `;

        // Append each concert div to the concertDetailsSection
        concertDetailsSection.appendChild(concertDiv);
    });
}

function applyFilters() {
    const keywordInput = document.getElementById("keywordInput").value.toLowerCase();
    const locationInput = document.getElementById("locationInput").value.toLowerCase();

    // Filter concerts based on keywords and location
    const filteredConcerts = concertData.UpcomingConcerts.filter(concert => {
        const titleMatch = concert.title.toLowerCase().includes(keywordInput);
        const locationMatch = concert.location.toLowerCase().includes(locationInput);
        return titleMatch && locationMatch;
    });

    // Render the filtered concerts
    renderConcerts(filteredConcerts);
}

function buyTickets(concertId) {
    // Your buy tickets logic here
    console.log(`Buying tickets for concert with ID: ${concertId}`);
}
