const toggleIcon = document.querySelector(".toggle-menu")
const mainList = document.querySelector(".main-list")
toggleIcon.addEventListener("click", () => {
    mainList.classList.toggle("hidden")
})