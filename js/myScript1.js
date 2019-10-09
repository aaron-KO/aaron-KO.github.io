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

document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.getElementById('dropdown-btn');
  const myDropdown = document.getElementById('my-dropdown');
  dropdownBtn.addEventListener('click', function() {
    myDropdown.classList.toggle('show');
  });
  document.addEventListener('click', function(e) {
    const isClickInside = dropdownBtn.contains(e.target);

    if (!isClickInside) {
      myDropdown.classList.remove('show');
    }
  });
  const myNavbar = document.getElementById('myTopnav');
});
