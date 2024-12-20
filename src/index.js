/* Variable */
import {projects,blogs} from "../data/data.js"  ;
const contactForm = document.querySelector(".form-js");
const closeModal = document.querySelector(".close-modal");
const contactModal = document.querySelector(".contact-modal");
const tabButtons = document.querySelectorAll(".tab-button");
const slider = document.querySelector(".slider")
const sliderCont = document.querySelector(".skills-list")
const projectListCont = document.querySelector(".project-list")
const blogListCont = document.querySelector(".blog-list")

const gang = 0;

/* Set display about me tab and set the copyright date */
document.querySelector(".about-me-tab").classList.toggle("active"); 
document.querySelector(".copyright-date").innerText = new Date().getFullYear().toString();





/* Function to dynamically load all the projects */
function getProjects() {

    if (projects.length === 0) {
        document.querySelector(".projects-section").style.display = "none"
        document.querySelectorAll('a').forEach( link => {if (link.innerText == "PROJECTS") link.style.display = "none"})
    } else {
        let allProjects = "";

        projects.forEach(project => {
            if (project.latest) {
                let projectDetails = `
                <div class="project-card" data-projectid=${project.id}>
                    <div class="project-cover"><img src="${project.image}" alt="${project.title}"></div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.header}</p>
                    <a href="project.html?project=${project.id}">View project details <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
                </div>
            
            ` 

            allProjects += projectDetails;
            }
            
        });

        projectListCont.innerHTML = allProjects;

        document.querySelectorAll(".project-card").forEach( projectCard => {
            projectCard.addEventListener("click", (event) => {
                let id = projectCard.dataset.projectid;
                console.log(id)
                window.location.href = "project.html?project=" + id;
                
            });
        })
    }

}






getProjects()


if(gang === 0) {
    
    document.querySelector(".blog-section").style.display = "none"
    document.querySelectorAll('a').forEach( link => {if (link.innerText == "BLOGS") link.style.display = "none"})
}


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


