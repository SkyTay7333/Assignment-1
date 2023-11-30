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

    // Save the current dark mode state to localStorage
    saveDarkModeState();
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is already logged in
    checkLoggedInUser();

    // Display a welcome message on the home page
    displayWelcomeMessage();

    // Initialize dark mode
    initializeDarkMode();

    // Other existing code...

    // Add an event listener to the login form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get user input
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if the provided credentials are valid (you may replace this with your own authentication logic)
            if (isValidUser(username, password)) {
                // Set the current user in localStorage
                setCurrentUser(username);

                // Redirect to the home page or any other page after successful login
                window.location.href = "home.html";
            } else {
                // Display an error message or perform other actions for invalid credentials
                alert("Invalid username or password. Please try again.");
            }
        });
    }

    // Add an event listener to the logout button
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            // Log out the user by removing the current user from localStorage
            logoutUser();
        });
    }
});

// Function to initialize dark mode
function initializeDarkMode() {
    // Get the saved dark mode state from localStorage, if available
    const savedDarkMode = localStorage.getItem("darkMode");

    // If the saved dark mode state is available, use it; otherwise, use the default value (false)
    darkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;

    // Apply dark mode styles to the <body> element
    document.body.classList.toggle("dark-mode", darkMode);

    // Update the dark mode button text based on the dark mode state
    const darkModeButton = document.getElementById("darkModeToggle");
    darkModeButton.textContent = darkMode ? "Light Mode" : "Dark Mode";
}

// Function to save the current dark mode state to localStorage
function saveDarkModeState() {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
}
