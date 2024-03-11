const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const body = document.getElementById("body");

moonIcon.addEventListener("click", toggleDarkMode);
sunIcon.addEventListener("click", toggleLightMode);

function toggleDarkMode() {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    localStorage.setItem("darkMode", "true");
}

function toggleLightMode() {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("darkMode", "false");
}

const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
    toggleDarkMode();
}
