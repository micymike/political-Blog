document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (email === '' || password === '') {
        event.preventDefault();
        alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match.');
    } else {
        // Redirect to home.html after form submission
        event.preventDefault(); // Prevent actual form submission
        window.location.href = 'home.html';
    }
});

document.getElementById('log-el').addEventListener('click', function(event) {
    const form = document.getElementById('sign-up-form');
    form.submit();  // Trigger form submission
});
