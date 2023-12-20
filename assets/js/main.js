// ========== Fixed Navbar ========== //

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// ========== Active Navbar ========== //

let sections = document.querySelectorAll('section');
let navLinksSections = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinksSections.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
}

// ========== Mobile Navbar ========== //

const menuMobile = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

menuMobile.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

// Adiciona um evento de clique para fechar a navbar móvel ao clicar em um link
navLinksSections.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu');
  });
});

// ============= Email JS ========== //

const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactMessage = document.getElementById('contact-message'),
  contactMessageSubmit = document.getElementById('contact-submit-message')

const sendEmail = (e) => {
  e.preventDefault()

  // Check if the field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {

    // Add and remove color
    contactMessageSubmit.classList.remove('color-blue')
    contactMessageSubmit.classList.add('color-red')

    // Show message
    contactMessageSubmit.textContent = 'Preencha todos os campos 📩'
  } else {

    // Public key
    emailjs.sendForm('service_6w6tr3c', 'template_7t2qvfq', '#contact-form', 'x8_A9H57oUhPiTxcZ')
      .then(() => {

        // Show message and add color
        contactMessageSubmit.classList.add('color-blue')
        contactMessageSubmit.textContent = 'Mensagem Enviada ✅'

        // Remove message after five seconds
        setTimeout(() => {
          contactMessageSubmit.textContent = ''
        }, 3000)
      }, (error) => {
        alert('OOPS! ALGO FALHOU...', error)
      })

    // To clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactMessage.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== DARK LIGHT THEME ===============*/
document.addEventListener('DOMContentLoaded', function () {
  const themeButton = document.getElementById('theme-button');
  const body = document.body;

  themeButton.addEventListener('click', function () {
    // Toggle theme class on body
    body.classList.toggle('light-theme');

    // Toggle icon class
    themeButton.classList.toggle('ri-sun-line');
    themeButton.classList.toggle('ri-moon-line');
  });
});