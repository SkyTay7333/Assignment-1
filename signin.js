document.addEventListener("DOMContentLoaded", function () {
    // Get the login form
    const loginForm = document.getElementById("loginForm");

    // Check if the login form exists
    if (loginForm) {
        // Add an event listener to the login form
        loginForm.addEventListener("submit", function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get user input
            const username = document.getElementById("user").value;
            const password = document.getElementById("pass").value;

            // Check if the provided credentials are valid
            if (isValidLogin(username, password)) {
                // Redirect to the home page after successful login
                window.location.href = "home.html";
            } else {
                // Display error messages for invalid credentials
                displayErrorMessage("Invalid username or password. Please try again.");
            }
        });
    }
});

// Function to check if the provided credentials are valid
function isValidLogin(username, password) {
    // Replace this with your actual login validation logic
    // For now, this is a basic example
    return username === "demo" && password === "password";
}

// Function to display error messages
function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = message;
}
