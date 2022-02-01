const   nav = document.querySelector (".header_nav"),
        hamburguer = document.querySelector (".hamburguer");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active")
    nav.classList.toggle("active")
});