const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 30,
});

let design = document.querySelector(".design");
let project = document.querySelector(".project");
let execution = document.querySelector(".execution");
let scroll1 = document.querySelector(".scroll1");
let scroll2 = document.querySelector(".scroll2");
let scroll3 = document.querySelector(".scroll3");
let designPara = document.querySelector("#designPara");
let projectPara = document.querySelector("#projectPara");
let executionPara = document.querySelector("#executionPara");
let Para1 = document.querySelector("#para1");
let Para2 = document.querySelector("#para2");
let Para3 = document.querySelector("#para3");

design.addEventListener("click", function () {
  scroll1.style.backgroundColor = "orangered";
  scroll2.style.backgroundColor = "rgba(151, 149, 149, 0.486)";
  scroll3.style.backgroundColor = "rgba(151, 149, 149, 0.486)";
  designPara.style.color = "#efeae3";
  projectPara.style.color = "rgba(151, 149, 149, 0.486)";
  executionPara.style.color = "rgba(151, 149, 149, 0.486)";
  Para1.style.display = "block";
  Para2.style.display = "none";
  Para3.style.display = "none";
});

project.addEventListener("click", function () {
  scroll1.style.backgroundColor = "rgba(151, 149, 149, 0.486)";
  scroll2.style.backgroundColor = "orangered";
  scroll3.style.backgroundColor = "rgba(151, 149, 149, 0.486)";
  designPara.style.color = "rgba(151, 149, 149, 0.486)";
  projectPara.style.color = "#efeae3";
  executionPara.style.color = "rgba(151, 149, 149, 0.486)";
  Para1.style.display = "none";
  Para2.style.display = "block";
  Para3.style.display = "none";
});

execution.addEventListener("click", function () {
  scroll1.style.backgroundColor = "rgba(151, 149, 149, 0.486)";
  scroll2.style.backgroundColor = "rgba(151, 149, 149, 0.486)";
  scroll3.style.backgroundColor = "orangered";
  designPara.style.color = "rgba(151, 149, 149, 0.486)";
  projectPara.style.color = "rgba(151, 149, 149, 0.486)";
  executionPara.style.color = "#efeae3";
  Para1.style.display = "none";
  Para2.style.display = "none";
  Para3.style.display = "block";
});

let boxes = document.querySelectorAll(".box");
let card = document.querySelector(".card");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", function () {
    card.style.display = "block";
  });

  box.addEventListener("mouseleave", () => {
    card.style.display = "none";
  });
});

boxes.forEach((box) => {
  box.addEventListener("mouseenter", function () {
    let image = box.getAttribute("data-image");
    card.style.backgroundImage = `url(${image})`;
  });
});

let loader = document.querySelector(".loader");

setTimeout(function () {
  loader.style.top = "-150%";
}, 4000);

let fullScreen = document.querySelector(".full-screen");
let scrollBar = document.querySelector(".scroll-bar");
let menu = document.querySelector(".menu p");
let logo = document.querySelector("nav img");
let value = true;

menu.addEventListener("click", () => {
  if (value) {
    scrollBar.style.top = 0;
    setTimeout(function () {
      fullScreen.style.top = 0;
    }, 0300);
    logo.style.opacity = 0;
    value = false;
  } else {
    fullScreen.style.top = "-150%";
    logo.style.opacity = 1;
    setTimeout(function () {
      scrollBar.style.top = "-100%";
    }, 0300);
    value = true;
  }
});
