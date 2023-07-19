let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let sidebarbtn = document.querySelector(".bx bx-search");

btn.onclick = function() {
sidebar.classList.toggle("active");
}
sidebarbtn.onclick = function() {
sidebar.classList.toggle("active");
}
