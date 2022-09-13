window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0){
        const nav = document.getElementById("main-nav");
        nav.classList.add("scrolled");
    }
    else{
        const nav = document.getElementById("main-nav");
        nav.classList.remove("scrolled");
    }
});
console.log("Scroll event listener added");