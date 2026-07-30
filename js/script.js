/* ==========================================
            PRELOADER
========================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});


/* ==========================================
            AOS ANIMATION
========================================== */

AOS.init({

    duration: 1000,

    once: true,

    easing: "ease-in-out"

});


/* ==========================================
            STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");

        navbar.style.padding = "10px 0";

    } else {

        navbar.classList.remove("shadow");

        navbar.style.padding = "15px 0";

    }

});


/* ==========================================
            BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

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


/* ==========================================
            ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
            SMOOTH SCROLL
========================================== */

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


/* ==========================================
            TYPING EFFECT
========================================== */

const typingText = [

    "Web Developer",

    "Frontend Developer",

    "Programmer",

    "Open Source Contributor"

];

const typingElement = document.querySelector(".hero h3");

let textIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!deleting) {

        typingElement.textContent = currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent = currentText.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= typingText.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/* ==========================================
            SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".section");

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/* ==========================================
            CURRENT YEAR
========================================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =

        `© ${new Date().getFullYear()} Badhon Chandra Roy. All Rights Reserved.`;

}
