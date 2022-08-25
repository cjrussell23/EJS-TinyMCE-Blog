window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0){
        const nav = document.getElementById("main-nav");
        nav.classList.add("scrolled");
        nav.classList.remove("not-scrolled");
    }
    else{
        const nav = document.getElementById("main-nav");
        nav.classList.remove("scrolled");
        nav.classList.add("not-scrolled");
    }
});

function toggleHeader(){
    const headerText = document.getElementById("header-text");
    const spacer = document.getElementById("spacer");
    headerText.classList.toggle("hidden");
    spacer.classList.toggle("hidden");
}