
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-xmark'); // ✅ correct Font Awesome 6 class
//     navbar.classList.toggle('active');
// };






// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// Window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };

//     });

// let header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100);



//  menuIcon.classList.remove('fa-xmark'); // ✅ correct Font Awesome 6 class
//     navbar.classList.remove('active');

// };




let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark'); // toggle X icon
  menuIcon.classList.toggle('fa-bars');  // toggle hamburger
  navbar.classList.toggle('active');
};

// Scroll spy + sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document
        .querySelector('header nav a[href*="' + id + '"]')
        .classList.add('active');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Close menu when scrolling
  menuIcon.classList.remove('fa-xmark');
  menuIcon.classList.add('fa-bars');
  navbar.classList.remove('active');
};



// scroll reveal

 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });


// type js
// const typed = new typed('.multiple-text',{
//     String:['Frontend Developer','Backend Developer','Desiner']
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Designer','Java Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});










// menuIcon




