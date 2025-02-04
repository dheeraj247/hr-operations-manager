const form = document.querySelector('.form');
const emailInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('remember-me');
const loginButton = document.getElementById('login-btn');
document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }
});
document.addEventListener('DOMContentLoaded', () => {
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');

    togglePasswordButton.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePasswordButton.style.backgroundImage = isPassword ? "url(images/es.jpg)" : "url(images/ens.png)";
        togglePasswordButton.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
});
loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    let isValid = true;
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        alert('Please enter a valid email address.');
        isValid = false;
    }
    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters long.');
        isValid = false;
    }

    if (isValid) {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
        } else {
            localStorage.removeItem('savedEmail');
        }
        window.location.href = 'dash.html';
    }
});