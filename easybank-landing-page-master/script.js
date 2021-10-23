// add Mobile menu

const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");

links.forEach((link) => link.addEventListener("click", removeMenu));

function mobileMenu(e) {
  navlink.classList.toggle("active");
  hamburger.classList.toggle("active");
  document.querySelector(".header__title").classList.toggle("overlay");
}
function removeMenu() {
  hamburger.classList.remove("active");
  navlink.classList.remove("active");
}
hamburger.addEventListener("click", mobileMenu);

// sticky nav
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

console.log(navHeight);

function stickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-40px",
});
headerObserver.observe(header);

// Media queries for desktop
const reqBtn = document.querySelector(".button__request");
const mediaQuery = window.matchMedia("(min-width:768px)");
const mediaQuery2 = window.matchMedia("min-width:1200px");
const hs = document.querySelectorAll("h2");
const btn = nav.lastElementChild;
const li = document.createElement("li");
const a = document.createElement("a");

function handleTabletChange(e) {
  if (e.matches) {
    nav.insertAdjacentHTML(
      "beforeend",
      `<li class="nav__item">
      <a href="#" class="button__request button__request--nav">Request Invite</a>
    </li> `
    );
    reqBtn.classList.remove("pos__center");
  } else {
    reqBtn.classList.add("pos__center");
    nav.lastElementChild.remove();
  }
}

mediaQuery.addEventListener("change", handleTabletChange);

handleTabletChange(mediaQuery);

const headerTitle = document.querySelector(".header__title");

// section animations

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.5,
});

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// smooth scrolling

navlink.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
