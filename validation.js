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

function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = message;
}
