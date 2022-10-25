const searchBar = document.querySelector(".search-bar")
const magnifier = document.querySelector(".magnifier")

magnifier.addEventListener("click", ()=>{
    searchBar.classList.toggle("active")
})