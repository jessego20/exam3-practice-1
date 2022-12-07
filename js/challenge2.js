window.addEventListener("load", function() {
    let defaultVal = document.querySelector("#billing").innerHTML;
    console.log(defaultVal);
});

document.querySelector("input[name=useBilling]").addEventListener("change", function() {
    let billingInfo = document.querySelector("#billing").innerHTML;
    let homeBox = document.querySelector("#home");
    if (this.checked == true) {
        homeBox.innerHTML = billingInfo;
        homeBox.disabled = true;
    }
    else {
        homeBox.innerHTML = "";
        homeBox.disabled = false;
    }
});