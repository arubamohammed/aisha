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

buttonClicked();
