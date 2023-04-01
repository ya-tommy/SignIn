var name = "Click on the \"Log In\" button";
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