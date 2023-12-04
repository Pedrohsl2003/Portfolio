//========== Fixed Navbar ==========//

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

//========== Active Navbar ==========//

let sections = document.querySelectorAll('section');
let navLinksSections = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinksSections.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

//========== Mobile Navbar ==========//

const menuMobile = document.querySelector(".menu-mobile")
const navLinks = document.querySelector(".nav-links")

menuMobile.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
