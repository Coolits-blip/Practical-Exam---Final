document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (name === "" || email === "") {
        event.preventDefault();
        errorMessage.textContent = "Please fill out all fields!";
    } else {
        errorMessage.textContent = "";
    }
});

window.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingElement.textContent = greeting;
});

