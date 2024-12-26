
/* Variables */
import {projects,blogs} from "../data/data.js"  ;
const menuBtn = document.querySelector(".menu-btn-cont");
const themeSwitch = document.querySelectorAll(".theme-switch");
const sideNavBar = document.querySelector(".side-navBar");
const overLay = document.querySelector(".over-lay")
const body = document.querySelector("body");
const header = document.querySelector("header");
const switchEffect = document.querySelector(".switch-effect")



/* init theme */
document.addEventListener("DOMContentLoaded", () => {
        let theme = localStorage.getItem("demySiteTheme");
    
        if (theme === "light") {
            
            body.classList.add("theme-light");

            themeSwitch.forEach(toogle => {
                toogle.classList.add("active");
            });
            
        } else if (theme === "dark") {
            

            body.classList.remove("theme-light");

            themeSwitch.forEach(toogle => {
                toogle.classList.remove("active");
            });
        }

});


/* Check if blogs and projects are avaible else it hide their respective links */
if(blogs.length === 0 || blogs === undefined) {
    document.querySelectorAll('nav a').forEach( link => {
        if (link.innerText === "BLOGS") link.style.display = "none"})
}

if (projects.length === 0 || blogs === undefined) {
    document.querySelectorAll('nav a').forEach( link => {  
        if (link.innerText == "PROJECTS") link.style.display = "none"})
    
}



/* Event listeners */
menuBtn.addEventListener("click", function () {

    menuBtn.classList.toggle("active");
    sideNavBar.classList.toggle("active");
    overLay.classList.toggle("active");
    header.classList.toggle("active");

    if(menuBtn.classList.contains("active")) {
        // menuBtn.setAttribute("aria-hidden", "true");
        menuBtn.setAttribute("aria-expanded", "true");
        sideNavBar.setAttribute("aria-hidden", "false");

        sideNavBar.querySelectorAll("a").forEach( link => {
            link.setAttribute("tabindex", "0");
        })
        sideNavBar.querySelector(".theme-switch").setAttribute("tabindex", "0");

        

    } else {
        menuBtn.setAttribute("aria-expanded", "false");
        sideNavBar.setAttribute("aria-hidden", "true");

        sideNavBar.querySelectorAll("a").forEach( link => {
            link.setAttribute("tabindex", "-1");
        })

        sideNavBar.querySelector(".theme-switch").setAttribute("tabindex", "-1 ");
    }

    
    
});

themeSwitch.forEach( toogle => {
    toogle.addEventListener("click", function () {
        
        if (switchEffect.play == true) {
            switchEffect.currentTime = 0;
        } 
        switchEffect.play()


        body.classList.toggle("theme-light");
        toogle.classList.toggle("active");

        if (body.classList.contains("theme-light")) {
            localStorage.setItem("demySiteTheme", "light");
        } else {
            localStorage.setItem("demySiteTheme", "dark");
        }

        
    })
});

overLay.addEventListener("click", function () {
    menuBtn.classList.remove("active");
    sideNavBar.classList.remove("active");
    overLay.classList.remove("active");
    header.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.style.borderBottom = "2px solid var(--textColor)";
    } else {
        header.style.borderBottom = "none";
    }

});









