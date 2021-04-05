function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("edittext").style.display="none";
    document.getElementById("edittext1").style.display="none";
    document.getElementById("namewriting").style.opacity="50%";
    document.getElementById("namewriting1").style.opacity="50%";
    document.getElementById("submit1").style.opacity="50%";
    document.getElementById("submit2").style.opacity="50%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "10px";
    document.body.style.backgroundColor = "white";
    document.getElementById("namewriting").style.opacity="100%";
    document.getElementById("namewriting1").style.opacity="100%";
    document.getElementById("submit1").style.opacity="100%";
    document.getElementById("submit2").style.opacity="100%";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
