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

// Check required field
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1,input.length);
}

// Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
})