let nav = document.querySelector("nav");
let button = document.querySelector(".button");
let hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {
  let heroScroll = hero.getBoundingClientRect().bottom;

  if (heroScroll <= 100) {
    nav.classList.add("white");
    button.classList.add("green");
  } else {
    nav.classList.remove("white");
    button.classList.remove("green");
  }
});

let m = document.querySelectorAll('g[transform^="matrix"]');
m = Array.from(m);

function random() {
  let rand = m.sort(() => Math.random() - 0.5);

  rand.forEach((mRand, index) => {
    setTimeout(() => {
      if (mRand.style.opacity === "0") {
        mRand.style.opacity = "1";
      } else {
        mRand.style.opacity = "0";
      }
    }, index * 500);
  });
}

setInterval(random, 500);

/* Avevo intuito correttamente che dovevo ciclare le M e cambiarne l'opacità, 
ma ho chiesto a ChatGPT quale parte dell'SVG doveva essere ciclato, ovvero g[transform^="matrix"]
A volte scompaiono tutti insieme e ricompaiono dopo un po', ma non ne ho capito il motivo e a volte bisogna ricaricare la pagina*/

let filter = document.querySelectorAll(".tags>li");

filter.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  });
});

/* Ho reso selezionabili i tag nell'aside, anche se non hanno ulteriori effetti, 
avrei voluto far sì che filtrasse le notizie ma nessuno dei tag era compatibile, e credo avrei dovuto aggiungerli direttamente con JS */

let bookmarks = document.querySelectorAll(".bookmarkImg");

bookmarks.forEach((bookmarkImg) => {
  bookmarkImg.addEventListener("click", () => {
    if (bookmarkImg.getAttribute("src") === "./assets/imgs/svg/bookmark.svg") {
      bookmarkImg.setAttribute("src", "./assets/imgs/svg/bookmark-yellow.svg");
    } else {
      bookmarkImg.setAttribute("src", "./assets/imgs/svg/bookmark.svg");
    }
  });
});

/* Sono andato a modificare l'svg con un editor online */
