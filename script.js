
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// Automatically show the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Give feedback when the contact form is submitted
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    feedback.textContent =
        "Thanks, " + name + "! Your form works. To send real messages, we'll connect it to a service next.";

    contactForm.reset();
});
s