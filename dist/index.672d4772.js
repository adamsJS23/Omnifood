const date = new Date();
const links = document.querySelector(".main-nav-list");
const hero = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const mobileNav = document.querySelector(".btn-mobile-nav");
const howItWork = document.querySelector("#how-it-work");
const featuredIn = document.querySelector("#featured-in");
const meals = document.querySelector("#meals");
const testimonials = document.querySelector("#testimonials");
const pricing = document.querySelector("#pricing");
const cta = document.querySelector("#cta");
const btnLearnMore = document.querySelector(".btn-outline");
const allCtaBtn = document.querySelectorAll(".btn-full");
const allLinks = document.querySelectorAll("a:link");
// const allLinks = document.querySelectorAll("a");
const navHeight = getComputedStyle(header).height;
///////////////////////////////////////////////////////////////
// Updating the copiright date automaticcaly
document.querySelector(".copyright-year").textContent = date.getFullYear();
///////////////////////////////////////////////////////////////
// implementing smooth scrooling for the menu
links.addEventListener("click", function(e) {
    e.preventDefault();
    if (!e.target.classList.contains("main-nav-link")) return;
    header.classList.toggle("open-nav"); // We close the mobile navigation
    const href = e.target.getAttribute("href");
    const sectionId = document.querySelector(href);
    sectionId.scrollIntoView({
        behavior: "smooth"
    });
});
///////////////////////////////////////////////////////////////
// implementing smooth scrooling for all links where href=#
allLinks.forEach((link)=>link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        if (href === "#") window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0
        });
    }));
//////////////////////////////////////////////////////////////////
// implementing smooth scrooling for the outline button Learn more
btnLearnMore.addEventListener("click", function() {
    howItWork.scrollIntoView({
        behavior: "smooth"
    });
});
// implementing smooth scrooling for the call to action button
allCtaBtn.forEach((ctaBtn)=>ctaBtn.addEventListener("click", function() {
        cta.scrollIntoView({
            behavior: "smooth"
        });
    }));
/////////////////////////////////////////////////////////////////////
// implementing sticky navigation
//   rootMargin: `-${navHeight}`,
function headerOberser(entry, observer) {
    !entry[0].isIntersecting ? document.querySelector("body").classList.add("sticky-nav") : document.querySelector("body").classList.remove("sticky-nav");
    console.log(navHeight);
}
const obserser = new IntersectionObserver(headerOberser, {
    root: null,
    threshold: 0,
    rootMargin: "-110px"
});
obserser.observe(hero);
///////////////////////////////////////////////////////////////
// implementing mobile navigation functionality
mobileNav.addEventListener("click", function(e) {
    e.preventDefault();
    header.classList.toggle("open-nav");
});

//# sourceMappingURL=index.672d4772.js.map
