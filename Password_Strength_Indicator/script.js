var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var warning = document.getElementById("warning");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
        warning.style.display = "block";
    }
    else{
        msg.style.display = "none";
        warning.style.display = "none";
    }

    var hasUpperCase = /[A-Z]/.test(pass.value);
    var hasLowerCase = /[a-z]/.test(pass.value);
    var hasNumbers = /\d/.test(pass.value);
    var hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass.value);

    var strength = 0;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumbers) strength++;
    if (hasSymbols) strength++;

    if(pass.value.length < 4){
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "Fair";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length >= 8 && strength >= 3){
        str.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
        warning.innerHTML = '';
    }
    else {
        warning.innerHTML = "Password should contain uppercase, lowercase, numbers, and symbols";
        warning.style.color = "#ff5925";
    }
});
