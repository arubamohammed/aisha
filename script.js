console.log("Site loaded");

function buttonClicked() {
   var button = document.getElementById("submit");
   button.addEventListener("click", nameEntered);
}

function nameEntered() {
    var nameInButton = document.getElementById("name").value;
    if (nameInButton.toLowerCase() == "aisha") {
        elements = document.querySelectorAll(".centred")
        elements.forEach(function(el){
            el.style.display = "none";
        })
        document.querySelector(".actual_website").style.display = "block";
    } else {
        elements = document.querySelectorAll(".centred")
        elements.forEach(function(el){
            el.style.display = "none";
        })
        document.querySelector(".redX").style.display = "block";
    }
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

buttonClicked();

let slideIndex = 0;
showSlides();


