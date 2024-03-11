var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name');
    var nameError = document.getElementById('name-error');

    if(name.value.trim() === '') {
        nameError.innerHTML = 'full name required *';
        name.placeholder = '';
        return false;
    }
    if (!name.value.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'full name required *';
        name.placeholder = '';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone');
    var phoneError = document.getElementById('phone-error');

    if(phone.value.length !== 10) {
        phoneError.innerHTML = '10 digit phone number required *';
        phone.placeholder = '';
        return false;
    }
    if(!phone.value.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'invalid phone number *';
        phone.placeholder = '';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email');
    var emailError = document.getElementById('email-error');

    if(!email.value.match(/^[\w.-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        emailError.innerHTML = 'invalid email format *';
        email.placeholder = '';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message');
    var messageError = document.getElementById('message-error');

    var required = 30;
    var left = required - message.value.length;

    if(message.value.trim() === ''){
        messageError.innerHTML = 'message is required *';
        message.placeholder = '';
        return false;
    }
    if(left > 0){
        messageError.innerHTML = left + ' more characters required *';
        message.placeholder = '';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please enter all your details *';
        setTimeout(function(){submitError.style.display = 'none';}, 5000);
        return false;
    }
}
