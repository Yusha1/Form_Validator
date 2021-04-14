const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Shows input error message and red outline
function showError(input, message) {
    if(input.value === '') {
        const formControl = input.parentElement;  // Grabs the parent element of input which is form-control div.
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');  // Grabs the small error message element
        small.innerHTML = message;
        
    }
}

// Shows success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check if email is valid
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }


    if(email.value === '') {
        showError(email, 'Email is required');
    } else if(!isEmailValid(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }


    if(password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }


    if(password2.value === '') {
        showError(password2, 'Confirm password')
    } else {
        showSuccess(password2);
    }
})