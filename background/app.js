var first = document.getElementById("first");
var second = document.getElementById("second");
var body = document.getElementById("contain");
var css = document.querySelector("h4");


function showgre()
{
    body.style.background = "linear-gradient(to right," + 
    first.value + ", " + second.value + ")";

    css.textContent = body.style.background + ","; 
}


first.addEventListener("input", showgre);
second.addEventListener("input", showgre);
