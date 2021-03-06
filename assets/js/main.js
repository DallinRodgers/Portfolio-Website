const nav = document.querySelector(".nav-links");

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Toggle Nav
  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active");

    //   Animage Links
    // index represents the index of each li in the array
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    // Burger animate
    burger.classList.toggle("toggle");
  });
};

navSlide();

// let scrollpos = window.scrollY;
// const header = document.querySelector("nav");
// const logo = document.querySelector(".logo");
// const links = document.querySelectorAll(".nav-link");
// const burgerLines = document.querySelectorAll(".line");
// const header_height = header.offsetHeight;

// function add_class_on_scroll(el, cl) {
//   const element = el;
//   const classToAdd = cl;
//   element.classList.add(classToAdd);
// }
// function remove_class_on_scroll(el, cl) {
//   const element = el;
//   const classToAdd = cl;
//   element.classList.remove(classToAdd);
// }

// window.addEventListener("scroll", function() {
//   scrollpos = window.scrollY;
//   if (scrollpos >= header_height) {
//     add_class_on_scroll(header, "fade-in");
//     add_class_on_scroll(logo, "text-fade-in");
//     add_class_on_scroll(nav, "nav-links-dark");
//     for (let i = 0; i < links.length; i++) {
//       add_class_on_scroll(links[i], "text-fade-in");
//     }
//     for (let i = 0; i < burgerLines.length; i++) {
//       add_class_on_scroll(burgerLines[i], "background-fade-in");
//     }
//   } else {
//     remove_class_on_scroll(header, "fade-in");
//     remove_class_on_scroll(logo, "text-fade-in");
//     remove_class_on_scroll(nav, "nav-links-dark");
//     for (let i = 0; i < links.length; i++) {
//       remove_class_on_scroll(links[i], "text-fade-in");
//     }
//     for (let i = 0; i < burgerLines.length; i++) {
//       remove_class_on_scroll(burgerLines[i], "background-fade-in");
//     }
//   }
// });
