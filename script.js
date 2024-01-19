function check() {
            
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var username = document.getElementById('username').value;

    if(username===' ')
    {
        alert('username cannot be blank');
    }
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    if (password2.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    
    
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
