
// Get the menu button and navigation links
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuButton.setAttribute("aria-expanded", isOpen);

});

// Close the menu when a navigation link is clicked
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuButton.setAttribute("aria-expanded", "false");

    });

});

// Display the current year
const year = document.getElementById("currentYear");

year.textContent = new Date().getFullYear();


// Scroll reveal animation
const revealItems = document.querySelectorAll(
    ".about-content, .skill-card, .project-card, " +
    ".education-card, .certification-card, .contact-text, .contact-details"
);

// Add the reveal class to each item
revealItems.forEach(function (item) {
    item.classList.add("reveal");
});

// Show content when it enters the screen
function showContent() {

    revealItems.forEach(function (item) {

        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 80;

        if (itemPosition < screenPosition) {
            item.classList.add("active");
        }

    });

}

// Run animation when scrolling
window.addEventListener("scroll", showContent);

// Run once when the page loads
showContent();