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
