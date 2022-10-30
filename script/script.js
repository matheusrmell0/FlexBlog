// ANIMAÇÃO (PLUGIN)
if (window.SimpleAnime) {
  new SimpleAnime();
}
//

// TRANSIÇÃO SUAVE
const navLinks = document.querySelectorAll('.header a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}
function scrollToSection(event) {
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 20;
  nativeScroll(distanceFromTheTop);
}
navLinks.forEach((smoothMenu) => {
  smoothMenu.addEventListener("click", scrollToSection);
});
//


// SCROLLING FADE
function scrollingFade() {
  const purple = document.getElementById("purple");
  const pink = document.getElementById("pink");
  const blue = document.getElementById("blue");
  if (window.scrollY > 435 && matchMedia("(min-width: 440px)").matches) {
    purple.classList.add('opacity-1');
  }else{ if (window.scrollY > 0 && matchMedia("(max-width: 440px)").matches){
    purple.classList.remove('opacity-0','marg30');
  }
  }
  if (window.scrollY > 415 && matchMedia("(min-width: 440px)").matches) {
    pink.classList.add('opacity-1-down');
  }else{ if (window.scrollY > 0 && matchMedia("(max-width: 440px)").matches){
    pink.classList.remove('opacity-0','marg-10');
  }
  }
  if (window.scrollY > 435 && matchMedia("(min-width: 440px)").matches) {
    blue.classList.add('opacity-1');
  }else{ if (window.scrollY > 0 && matchMedia("(max-width: 440px)").matches){
    blue.classList.remove('opacity-0','marg30');
  }
  }
  if(window.scrollY > 1100 && matchMedia("(min-width: 440px)").matches){
  document.getElementById('cobre').classList.add('opacity-1');
}
if(window.scrollY > 1075 && matchMedia("(min-width: 440px)").matches){
  document.getElementById('prata').classList.add('opacity-1');
}
if(window.scrollY > 1030 && matchMedia("(min-width: 440px)").matches){
  document.getElementById('ouro').classList.add('opacity-1');
}else{ if(window.scrollY > 0 && matchMedia("(max-width: 440px)").matches){
  document.getElementById('cobre').classList.remove('opacity-0','marg20');
  document.getElementById('prata').classList.remove('opacity-0','marg20');
  document.getElementById('ouro').classList.remove('opacity-0','marg20');
}
}
if(window.scrollY > 1800){
  document.querySelector('.qualidade').classList.add('opacity-center');
  }
}
window.addEventListener("scroll", scrollingFade);
// 

console.log("❤ ✔ By Mello 😃");