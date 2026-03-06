document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupLink = document.getElementById("signup-link");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        if (username && password) {
            localStorage.setItem("currentUser", username);
            window.location.href = "chat.html";
        } else {
            alert("Please enter both username and password");
        }
    });

    signupLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Sign up functionality would be implemented here.");
    });
});
