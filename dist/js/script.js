window.onscroll = function () {
   const header = document.querySelector("header");
   const fixedNav = header.offsetTop;

   if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
   } else {
      header.classList.remove("navbar-fixed");
   }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
   hamburger.classList.toggle("hamburger-active");
   navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
   if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
   }
});

// const scriptURL =
//    "https://script.google.com/macros/s/AKfycbx0eCzzKaKtZ2gIwprnJ-5xtkpoM0kqcLv5uoVVUVZZMgIsJ6Fn6YHJ5OzUIOcpIcJV/exec";
// const form = document.forms["Ant1po1e-contact-form"];
// const success = document.querySelector(".success");
// const formAlert = document.querySelector(".alert");

// form.addEventListener("submit", (e) => {
//    e.preventDefault();
//    formAlert.classList.toggle("hidden");
//    formAlert.classList.toggle("flex");
//    success.classList.toggle("hidden");
//    fetch(scriptURL, {
//       method: "POST",
//       body: new FormData(form),
//    })
//       .then((response) => {
//          formAlert.classList.toggle("hidden");
//          formAlert.classList.toggle("flex");
//          success.classList.add("hidden");
//          form.reset();
//          console.log("Success!", response);
//       })
//       .catch((error) => console.error("Error!", error.message));
// });

const back2Top = document.querySelector("#back2top");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 200) {
      back2Top.classList.remove("opacity-0");
      back2Top.classList.add("opacity-100");
   } else {
      back2Top.classList.add("opacity-0");
      back2Top.classList.remove("opacity-100");
   }
});

back2Top.addEventListener("click", (e) => {
   e.preventDefault();
   window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
   "Make a Payment",
   "Transfer",
   "Top-up" 
];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
   while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
         el.innerText = curWord.substring(0, i + 1);
         await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
         el.innerText = curWord.substring(0, i - 1);
         await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
         curPhraseIndex = 0;
      } else {
         curPhraseIndex++;
      }
   }
};

writeLoop();

const loader = document.getElementById("preloader");
const body = document.body;
const html = document.documentElement;

body.style.overflow = "hidden";
html.style.overflow = "hidden";

window.addEventListener("load", function () {
   body.style.overflow = "auto";
   html.style.overflow = "auto";
   loader.style.display = "none";
});
