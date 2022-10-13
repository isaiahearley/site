/* 
    Student Name: Isaiah Earley
    File Name: index.js
    Date: 10/13/2022
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("logo");
    if (menu.style.display === "block") { 
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}