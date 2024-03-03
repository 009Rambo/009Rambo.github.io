// Function to scroll to the specified section by its id
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to toggle between dark and light mode
function toggleDarkMode() {
    const body = document.body;

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check user's preference on page load
document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;

    // Set initial mode based on user's preference
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
});

// Show or hide the button based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Function to display current time of Finland
function displayFinlandTime() {
    const finlandTimeElement = document.getElementById('finlandTime');
    const finlandTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Helsinki' });
    finlandTimeElement.textContent = 'Finland Time: ' + finlandTime;
}

// Function to display current time of user's location
function displayUserLocationTime() {
    const userLocationTimeElement = document.getElementById('userLocationTime');
    const userLocationTime = new Date().toLocaleString();
    userLocationTimeElement.textContent = 'Your Location Time: ' + userLocationTime;
}

// Call the functions when DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
   // fetchVisitorCount();
    displayFinlandTime();
    displayUserLocationTime();
});

