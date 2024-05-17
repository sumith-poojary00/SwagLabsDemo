function validateUser() {
    var username = document.getElementById('user-name').value;
    var password = document.getElementById('password').value;

    // Perform validation (for demonstration, checking if username and password are not empty)
    if (username.trim() === '' || password.trim() === '')
        {
            alert('Please enter both username and password!');
        }
}
