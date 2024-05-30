document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match.');
    }
});

document.getElementById("sign-el").addEventListener("click", function(){
    document.getElementById("sign-up-form").submit();
    window.location('home.html')
})