<button id="themeToggle" class="theme-toggle" aria-label="Toggle Theme">
    <i class="fas fa-moon"></i>
</button>
/* ==========================================
   theme.js
   Premium Portfolio Theme Switcher
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("themeToggle");

    if (!themeButton) return;

    const icon = themeButton.querySelector("i");

    // Get saved theme
    let savedTheme = localStorage.getItem("theme");

    // Detect system preference if no saved theme
    if (!savedTheme) {

        savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    }

    applyTheme(savedTheme);

    // Toggle button
    themeButton.addEventListener("click", () => {

        const newTheme =
            document.body.classList.contains("light-mode")
                ? "dark"
                : "light";

        applyTheme(newTheme);

        localStorage.setItem("theme", newTheme);

    });

    // Update if system theme changes (only when no manual selection)
    window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", e => {

            if (!localStorage.getItem("theme")) {

                applyTheme(e.matches ? "dark" : "light");

            }

        });

    function applyTheme(theme) {

        if (theme === "light") {

            document.body.classList.add("light-mode");

            document.body.classList.remove("dark-mode");

            icon.className = "fas fa-sun";

        } else {

            document.body.classList.remove("light-mode");

            document.body.classList.add("dark-mode");

            icon.className = "fas fa-moon";

        }

    }

});
