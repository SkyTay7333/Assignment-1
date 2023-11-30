document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create user object
        const user = {
            username,
            email,
            password,
        };

        // Store user in localStorage (this is not secure for production)
        localStorage.setItem('currentUser', JSON.stringify(user));

        // You may redirect to another page or perform other actions after registration
        alert('Registration successful! You can now login.');

        // Clear the form
        registrationForm.reset();
    });
});

function login() {
    // Get user input
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    // Retrieve user data from localStorage (this is not secure for production)
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));

    // Check if the entered credentials match the stored user
    if (storedUser && username === storedUser.username && password === storedUser.password) {
        // Redirect to a secure page (e.g., dashboard)
        window.location.href = 'dashboard.html';
    } else {
        // Display an error message (you can customize this part)
        alert('Invalid credentials. Please try again.');
    }
}