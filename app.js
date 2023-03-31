var name = "Click on the \'Log in\' button";
var i = 0
var speed = 75;
function typedEffect() {
    if (i < name.length) {
        document.getElementById("typed").innerHTML += name.charAt(i);
        i++
        setTimeout(typedEffect, speed);
    }
}

// ça s'en vient...
