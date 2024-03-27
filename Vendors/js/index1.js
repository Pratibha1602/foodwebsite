 
 const hamburger = document.querySelector('.hamburger');
 const mainNav = document.querySelector('.main-nav');

 hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
 });

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    mainNav.classList.remove("active");
}))