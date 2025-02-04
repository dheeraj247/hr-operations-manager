document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const verifyButton = document.querySelector(".btn-green");
    const submitButton = document.querySelector(".btn-red");
    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        if (password.length < 8) {
            passwordInput.style.borderColor = "red";
            passwordInput.setCustomValidity("Password must be at least 8 characters long.");
        } else {
            passwordInput.style.borderColor = "green";
            passwordInput.setCustomValidity("");
        }
    });

    verifyButton.addEventListener("click", () => {
        const mobileInput = document.getElementById("mobile");
        const mobile = mobileInput.value.trim();

        if (!mobile) {
            alert("Please enter your mobile number for verification.");
            mobileInput.focus();
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            mobileInput.focus();
            return;
        }

        alert(`A verification code has been sent to ${mobile}.`);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll("input[required]");
        let isFormValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isFormValid = false;
                alert(`Please fill out the ${input.name} field.`);
                input.focus();
                return;
            }
        });

        if (isFormValid) {
            alert("Registration successful!");
            form.submit();
        }
    });
});
