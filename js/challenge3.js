window.addEventListener("load", function() {
    let message = document.querySelectorAll("figcaption")[1].innerHTML
    alert(message);
});


let original = document.querySelector("#display").innerHTML;
let images = document.querySelectorAll(".thumbnail")
for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("mouseover", function() {
        document.querySelector("#display").style.backgroundImage = "url(" + this.src + ")"
        document.querySelector("#display").innerHTML = this.alt;
        this.style.visibility = "hidden";
    });

    images[i].addEventListener("mouseleave", function() {
        document.querySelector("#display").style.backgroundImage = "none";
        document.querySelector("#display").innerHTML = original;
        this.style.visibility = "visible";
    });

    images[i].addEventListener("keydown", function() {
        document.querySelector("#display").style.backgroundImage = "url(" + this.src + ")"
        document.querySelector("#display").innerHTML = this.alt;
        // this.style.visibility = "hidden";
    });

    images[i].addEventListener("keyup", function() {
        document.querySelector("#display").style.backgroundImage = "none";
        document.querySelector("#display").innerHTML = original;
        // this.style.visibility = "visible";
    });
}
document.querySelectorAll(".thumbnail")[1].tabIndex = "0";
