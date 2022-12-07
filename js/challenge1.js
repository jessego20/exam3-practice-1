window.addEventListener("load", function() {
    document.querySelector("h1").style.color = "#a334ed";
    document.querySelector("h1").style.textAlign = "center";
});

window.addEventListener("dblclick", function() {
    alert(Date());
});

document.querySelector("#toggle").addEventListener("change", function() {
    let emailBox = document.querySelector("#emailBox");
    if (emailBox.classList.contains("hidden")) {
        emailBox.classList.remove("hidden");
    }
    else {
        emailBox.classList.add("hidden");
    }
});