/* Variable */
const contactForm = document.querySelector(".form-js");
const closeModal = document.querySelector(".close-modal");
const contactModal = document.querySelector(".contact-modal");
const tabButtons = document.querySelectorAll(".tab-button");
const slider = document.querySelector(".slider")
const sliderCont = document.querySelector(".skills-list")


document.querySelector(".about-me-tab").classList.toggle("active"); //display my about tab



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


/* About me tab function */
tabButtons.forEach( tab => {

    tab.addEventListener("click", function () {
        tabButtons.forEach( tab => tab.classList.remove("active"));
        tab.classList.add("active");

        const content = document.querySelector(`.${tab.dataset.tabname}`);
        content.parentNode.querySelectorAll(".tab-content").forEach( content => content.classList.remove("active"))
        content.classList.add("active");
        
        
    });

});


