
function myFunction() {
    var x = document.getElementById("myTopnav");
    var b = document.getElementById("bar");
    if (x.className === "topnav") {
        x.className += " responsive";
        b.className = "fas fa-times";
    } else {
        x.className = "topnav";
        b.className = "fa fa-plus";
    }
}
