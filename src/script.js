
/* Variables */
const menuBtn = document.querySelector(".menu-btn-cont");
const themeSwitch = document.querySelectorAll(".theme-switch");
const sideNavBar = document.querySelector(".side-navBar");
const overLay = document.querySelector(".over-lay")
const body = document.querySelector("body");
const header = document.querySelector("header");


/* init theme */
document.addEventListener("DOMContentLoaded", () => {
        let theme = localStorage.getItem("demySiteTheme");
    
        if (theme === "light") {
            console.log("theme is ",theme);
            body.classList.add("theme-light");

            themeSwitch.forEach(toogle => {
                toogle.classList.add("active");
            });
            
        } else if (theme === "dark") {
            console.log("theme is ".theme);

            body.classList.remove("theme-light");

            themeSwitch.forEach(toogle => {
                toogle.classList.remove("active");
            });
        }
});


/* Event listeners */
menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    sideNavBar.classList.toggle("active");
    overLay.classList.toggle("active");
    header.classList.toggle("active");
});

themeSwitch.forEach( toogle => {
    toogle.addEventListener("click", function () {
        
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
    if (window.scrollY > 200) {
        header.style.borderBottom = "2px solid var(--textColor)";
    } else {
        header.style.borderBottom = "none";
    }

});





