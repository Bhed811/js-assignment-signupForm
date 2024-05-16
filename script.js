function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var city = document.getElementById("city").value;
    var qualification = document.getElementById("qualification").value;

    // Check all fields filled
    if (!name || !phone || !age || !gender || !email || !password || !confirmPassword || !city || !qualification) {
        showModal("All fields are required.", true);
        return;
    }

    // Email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;
    if (!emailRegex.test(email)) {
        showModal("Invalid email format.", true);
        return;
    }

    // Phone number validation
    var phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        showModal("Invalid phone number. Enter a 10-digit Indian mobile number starting with 6-9.", true);
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        showModal("Passwords do not match.", true);
        return;
    }

    showModal("Form submitted successfully!", false);
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password i'); 
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash'); 
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye'); 
    }
}
function toggleConfirmPasswordVisibility() {
    var passwordInput = document.getElementById('confirmPassword');
    var toggleIcon = document.querySelector('.toggle-confirmPassword i'); 

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash'); 
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye'); 
    }
}


function showModal(message, isError) {
    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modalText");
    modalText.textContent = message;
    modal.style.display = "flex";

    if (isError) {
        modalText.style.color = 'red';
    } else {
        modalText.style.color = 'black';
    }
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}
window.onload = closeModal();