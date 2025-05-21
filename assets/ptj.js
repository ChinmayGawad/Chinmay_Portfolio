const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ========== QUOTE FEATURE =============
// ...existing code...
const localQuotes = [
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { content: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { content: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { content: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { content: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { content: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { content: "Act as if what you do makes a difference. It does.", author: "William James" },
  { content: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { content: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { content: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { content: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { content: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { content: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { content: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { content: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
  { content: "Opportunities are usually disguised as hard work, so most people don’t recognize them.", author: "Ann Landers" },
  { content: "Don’t be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
  { content: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
  { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { content: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
  { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { content: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { content: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];
// ...existing code...
let currentQuoteIndex = 0;

function displayQuote() {
  const quoteDiv = document.getElementById('quote');
  if (quoteDiv && localQuotes.length > 0) {
    const q = localQuotes[currentQuoteIndex];
    quoteDiv.innerHTML = `<span style="font-size:1.1em;">“${q.content}”</span><br><span style="font-size:0.95em; color:var(--text-color-light, #888);">— ${q.author}</span>`;
  }
}

function showNextQuote() {
  if (localQuotes.length > 0) {
    currentQuoteIndex = (currentQuoteIndex + 1) % localQuotes.length;
    displayQuote();
  }
}

function displayRandomQuote() {
  if (localQuotes.length > 0) {
    // Pick a random index different from the current one
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * localQuotes.length);
    } while (randomIndex === currentQuoteIndex && localQuotes.length > 1);
    currentQuoteIndex = randomIndex;
    displayQuote();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayQuote();
  setInterval(displayRandomQuote, 5000); // Change quote every 5   seconds
});