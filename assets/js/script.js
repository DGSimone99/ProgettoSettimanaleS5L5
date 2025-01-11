document.addEventListener("DOMContentLoaded", () => {
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
});

document.addEventListener("DOMContentLoaded", () => {
  let m = document.querySelectorAll('g[transform^="matrix"]');

  function random() {
    let rand = Array.from(m).sort(() => Math.random() - 0.5);

    rand.forEach((mRand, index) => {
      setTimeout(() => {
        if (mRand.style.opacity === "0") {
          mRand.style.opacity = "1";
        } else {
          mRand.style.opacity = "0";
        }
      }, index * 1000);
    });
  }

  setInterval(random, 500);
});

/* Avevo intuito correttamente che dovevo ciclare le M e cambiarne l'opacità, 
ma ho chiesto a ChatGPT quale parte dell'SVG doveva essere ciclato, ovvero g[transform^="matrix"]
A volte scompaiono tutti insieme e ricompaiono dopo un po', ma non ho ben capito il motivo*/
