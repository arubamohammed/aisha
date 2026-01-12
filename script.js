console.log("Site loaded");

let slideIndex = 1;
let slideTimer;

function plusSlides(n) {
    clearTimeout(slideTimer);
    showManualSlides(slideIndex += n);
    slideTimer = setTimeout(showSlides, 7000);
}

function currentSlide(n) {
    clearTimeout(slideTimer)
    showManualSlides(slideIndex = n);
}

function showManualSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slideTimer = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function buttonClicked() {
   var button = document.getElementById("submit");
   button.addEventListener("click", nameEntered);
}

function textBoxEnter() {
   var textBox = document.getElementById("name")
   textBox.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        nameEntered();
    }})
}

function nameEntered() {
    var nameInButton = document.getElementById("name").value;
    if (nameInButton.toLowerCase() == "aisha") {
        elements = document.querySelectorAll(".centred")
        elements.forEach(function(el){
            el.style.display = "none";
        })
        document.querySelector(".actual_website").style.display = "block";
        showSlides();
        confetti({ particleCount: 1000, spread: 100, origin: { y: 0.6 } });
        var music = document.getElementById("birthdayMusic");
        music.play();
    } else {
        elements = document.querySelectorAll(".centred")
        elements.forEach(function(el){
            el.style.display = "none";
        })
        document.querySelector(".redX").style.display = "block";
    }
}

buttonClicked();
textBoxEnter();




