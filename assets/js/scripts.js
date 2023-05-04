const mobileNavButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".section--header");

mobileNavButton.addEventListener("click", () => {
    console.log("[Header]: ", header);
    header.classList.toggle("nav-open");
    console.log("[Header]: ", header);
});


// Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        if (href.startsWith("#") && href.length > 1) {
            const sectionElement = document.querySelector(href);
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }

        // close mobile navigation
        if (link.classList.contains("main-nav-link")) {
            document.querySelector(".section--header").classList.toggle("nav-open");
        }

        if (!href.startsWith("#")) {
            window.location = href;
        }
    });
});

/* Sticky Navigation */

// Calculate the height of the navigation
const navigationHeight = document.querySelector(".header").offsetHeight;

// Add 1 to the navigation height to avoid the navigation to be stuck and add the px unit
document.documentElement.style.setProperty("--scroll-padding", navigationHeight + 1 + "px"); 
