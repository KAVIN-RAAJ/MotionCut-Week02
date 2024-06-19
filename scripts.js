document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');

    togglePasswordButton.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePasswordButton.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            togglePasswordButton.textContent = 'Show';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const password = passwordField.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

        if (!passwordRegex.test(password)) {
            alert('Password must contain at least one capital letter, one number, and be at least 5 characters long.');
            return;
        }

        alert('Form submitted successfully!');
        // Add form submission logic here
    });
});
