/* ==========================================
   main.js
   Premium Portfolio JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       Current Year
    ====================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* ======================================
       Sticky Header
    ====================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ======================================
       Back To Top Button
    ====================================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                topBtn.style.display = "flex";

            } else {

                topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================
       Scroll Progress Bar
    ====================================== */

    const progress = document.querySelector(".progress-bar");

    if (progress) {

        window.addEventListener("scroll", () => {

            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progressHeight =
                (window.pageYOffset / totalHeight) * 100;

            progress.style.width = progressHeight + "%";

        });

    }

    /* ======================================
       Typing Animation
    ====================================== */

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [

            "Mathematics Student",

            "Frontend Developer",

            "WordPress Designer",

            "GitHub Enthusiast",

            "Lifelong Learner"

        ];

        let wordIndex = 0;

        let charIndex = 0;

        let deleting = false;

        function type() {

            const current = words[wordIndex];

            if (!deleting) {

                typing.textContent =
                    current.substring(0, charIndex++);

                if (charIndex > current.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;

                }

            } else {

                typing.textContent =
                    current.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            setTimeout(type, deleting ? 40 : 90);

        }

        type();

    }

    /* ======================================
       Active Navigation
    ====================================== */

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("nav a");

    function activeMenu() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 120;

            const id = section.getAttribute("id");

            if (scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ======================================
       Smooth Scroll
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ======================================
       Reveal Animation
    ====================================== */

    const reveals = document.querySelectorAll(".reveal");

    function reveal() {

        reveals.forEach(item => {

            const windowHeight = window.innerHeight;

            const top = item.getBoundingClientRect().top;

            if (top < windowHeight - 120) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ======================================
       Mobile Menu
    ====================================== */

    const menuBtn = document.querySelector(".menu-btn");

    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("show");

            menuBtn.classList.toggle("active");

        });

    }

    /* ======================================
       Theme Toggle
    ====================================== */

    const themeBtn = document.getElementById("themeToggle");

    if (themeBtn) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {

            document.body.classList.add("light-mode");

        }

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            localStorage.setItem(

                "theme",

                document.body.classList.contains("light-mode")
                    ? "light"
                    : "dark"

            );

        });

    }

    /* ======================================
       Project Filter
    ====================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projects =
        document.querySelectorAll(".project-card");

    if (filterButtons.length > 0) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");

                const filter =
                    button.dataset.filter;

                projects.forEach(project => {

                    if (
                        filter === "all" ||
                        project.classList.contains(filter)
                    ) {

                        project.style.display = "block";

                    } else {

                        project.style.display = "none";

                    }

                });

            });

        });

    }

    /* ======================================
       Loading Screen
    ====================================== */

    window.addEventListener("load", () => {

        const loader =
            document.querySelector(".loader-wrapper");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });

});
