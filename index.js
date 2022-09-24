/*NAVIGATION*/
const nav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible");
  if (visible === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
} );

/*TEXT EFFECTS*/
const titleText = document.querySelector(".title");
const strTitleText = titleText.textContent;
const splitTitleText = strTitleText.split("");
titleText.textContent = "";
const fadeIn = document.querySelectorAll(".fade-in");

for (let i = 0; i < splitTitleText.length; i++) {
  titleText.innerHTML += "<span>" + splitTitleText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 80);

function onTick() {
  const span = titleText.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitTitleText.length) {
    complete();
    fadeIn[0].classList.add("visible");
    fadeIn[1].classList.add("visible");
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

/*CAROUSEL*/
const next = document.querySelector('.next');
const previous = document.getElementById('button-previous');
const imgArr = document.getElementsByClassName("vending-machine")
const singleService = document.getElementsByClassName(".single-service");

function change() {
  if (imgArr[0].classList.contains('active-img')) {
    imgArr[0].classList.remove('active-img');
    imgArr[1].classList.add('active-img');
} 
 else if (imgArr[1].classList.contains('active-img')) {
     imgArr[1].classList.remove('active-img');
     imgArr[2].classList.add('active-img');
 }
 else {
     imgArr[2].classList.remove('active-img');
     imgArr[0].classList.add('active-img');
 }
}
// Add function on click to change the class of the images so we can see a different picture with each click
previous.addEventListener('click', () => {
change()
})

let timer2 = setInterval(change, 4000);

function complete2() {
  clearInterval(timer2);
  timer2 = null;
}