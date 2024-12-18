
/* Variables */
const menuBtn = document.querySelector(".menu-btn-cont");
const themeSwitch = document.querySelectorAll(".theme-switch");
const sideNavBar = document.querySelector(".side-navBar");
const overLay = document.querySelector(".over-lay")
const body = document.querySelector("body");
const header = document.querySelector("header");
const slider = document.querySelector(".slider")
const sliderCont = document.querySelector(".skills-list")
const switchEffect = document.querySelector(".switch-effect")
const contactForm = document.querySelector(".form-js");
const closeModal = document.querySelector(".close-modal");
const contactModal = document.querySelector(".contact-modal");




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



/* NOdeClone and animation  handliong of skills section */
let slider2 = slider.cloneNode(true);
slider2.style.animation = ("auto-play 15s linear infinite");
sliderCont.appendChild(slider2)


const skills = document.querySelectorAll('.skills');
const sliders = document.querySelectorAll('.slider');

skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        sliders.forEach(s => s.classList.add('paused')); 
    });

    skill.addEventListener('mouseleave', () => {
        sliders.forEach(s => s.classList.remove('paused'));
    });
});



/* Form Handling */
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    

    let data = new FormData(event.target);

    fetch(event.target.action, {
        method: "POST",
        headers: {
            'Accept': 'application/json'
        },
        body: data
    })
        .then(response => {
            if (response.ok) { 
                
                contactModal.querySelector("h4").innerText = "Message sent!";
                contactModal.querySelector("p").innerText = "Thank you for reaching out! I'll get back to you shortly.";
                contactModal.style.display = "block";

            } else {

                contactModal.querySelector("h4").innerText = "Message failed to send!";
                contactModal.querySelector("p").innerText = "It seems like there was a problem with the server. Please try again later.";
                contactModal.style.display = "block";
            }

            contactForm.reset()
        } )
        .catch(error => {
            console.error("Network error:", error);
        });


});

closeModal.addEventListener("click", function () {
    contactModal.style.display = "none";
});






