/* Variable */
import {projects} from "../data/data.js"  ;
const projectListCont = document.querySelector(".project-list")



/* Display All projects */
let allProjects = "";

projects.forEach(project => {
    
    let projectDetails = `
        <div class="project-card fade-in" data-animationtype="animate" data-projectid=${project.id}>
            <div class="project-cover"><img src="${project.image}" alt="${project.title}"></div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    
    ` 

    allProjects += projectDetails;
});

projectListCont.innerHTML = allProjects;

document.querySelectorAll(".project-card").forEach( projectCard => {
    projectCard.addEventListener("click", (event) => {
        let id = projectCard.dataset.projectid;
        console.log(id)
        window.location.href = "project.html?project=" + id;
        
    });
})






