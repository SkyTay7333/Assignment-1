document.addEventListener("DOMContentLoaded", function () {
    const createAccountForm = document.getElementById("createAccountForm");

    if (createAccountForm) {
        createAccountForm.addEventListener("submit", handleCreateAccountSubmit);
    }
});

function handleCreateAccountSubmit(event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if the provided credentials are valid
    if (isValidCreateAccount(username, email, password, confirmPassword)) {
        // Logic to create an account
        alert("Account created successfully!");
        
        // Redirect to the login page after successful account creation
        window.location.href = "signin.html";
    } else {
        // Display an error message for invalid credentials
        alert("Invalid input. Please check your information and try again.");
    }
}

function isValidCreateAccount(username, email, password, confirmPassword) {
    // Check if any field is empty
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required. Please fill them out.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    // You can add more validation checks for username, email format, etc.

    return true; // All checks passed
}
