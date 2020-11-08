
var imgset = ["images/00.jpg", "images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg", "images/07.jpg"];
var i = 0;

function next() {
    let img = document.getElementById("image");
    i++;
    if (i > 7)
        i = 0;

    img.src = imgset[i];
}

function previous() {
    let img = document.getElementById("image");
    i--;
    if (i < 0)
        i = 7;

    img.src = imgset[i];
}