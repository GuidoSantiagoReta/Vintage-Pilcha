
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

 