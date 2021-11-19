var display = false

window.onclick = function (event) {
    if (event.target.matches('#burger')) {
        if (display == false) {
            var div = document.getElementById("menu")
            div.style.display = "grid"
            div.style.margin = "20vmin 0"
            display = true
        } else if (display == true) {
            var div = document.getElementById("menu")
            div.style.display = "none"
            display = false;
        }
    }
}