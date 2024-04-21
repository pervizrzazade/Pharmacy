const hamburger = document.querySelector(".hamburger");
const nav_list = document.querySelector(".nav-list");
const search_input = document.querySelector(".nav-right");
// console.log(hamburger, nav_list,search_input);

hamburger.addEventListener("click", () => {
    nav_list.classList.toggle("active");
    search_input.classList.toggle("active");
})