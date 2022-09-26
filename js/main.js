
const  navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click',()=>{
      //toggle Nav
       nav.classList.toggle('nav-active');
  
      //Animate links
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        } else{
          link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
 
}
navSlide();

/*BUTTON*/

const btn = document.querySelector(".btn");

function changeColor (color){
btn.style.color = color;
}

 
//Carrousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})