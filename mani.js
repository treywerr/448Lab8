
function apply() {
    var lipsum = document.getElementById("lipsum");
    let r = document.getElementById("border_r").value;
    let g = document.getElementById("border_g").value;
    let b = document.getElementById("border_b").value;
    lipsum.style.borderColor = "rgb("+r+","+g+","+b+")";
    lipsum.style.borderWidth = document.getElementById("border_w").value + "px";

    r = document.getElementById("bg_r").value;
    g = document.getElementById("bg_g").value;
    b = document.getElementById("bg_b").value;
    lipsum.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}