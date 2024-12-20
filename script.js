const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".hamburger");
hamburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");  // إضافة أو إزالة الكلاس "active" من bars
    xmark.classList.toggle("active"); // إضافة أو إزالة الكلاس "active" من xmark
    navbar.classList.toggle("active"); // إضافة أو إزالة الكلاس "active" من navbar
});




let stars =document.getElementById('star');
let moon =document.getElementById('moon');
let mountains=document.getElementById('mountains');
let motor=document.getElementById('motor');
let eltarekk = document.querySelector('.eltarekk');
window.onscroll = function(){
let value=scrollY;
stars.style.left=value + 'px';
moon.style.top=value*3 + 'px';
mountains.style.top=value*1.5 + 'px';
motor.style.top=value + 'px';
motor.style.left=value*3 + 'px';
eltarekk.style.fontSize= value + 'px';
if(scrollY>=20){
    eltarekk.style.fontSize= 20 + 'px';
}
}


let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Set the next slide to be shown after 3 seconds
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

// Manual navigation
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlides(); // Update slides
}

// Initial display
showSlides();



