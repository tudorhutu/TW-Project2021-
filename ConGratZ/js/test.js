/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "toolbar") {
        x.className += " responsive";
    } else {
        x.className = "toolbar";
    }
}
