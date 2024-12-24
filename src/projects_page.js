/* Variable */
import {projects} from "../data/data.js"  ;
const projectListCont = document.querySelector(".project-list")



/* Display All projects */
let allProjects = "";

projects.forEach(project => {
    
    let projectDetails = `
        <div class="project-card" data-projectid=${project.id}>
            <div class="project-cover"><img src="${project.image}" alt="${project.title}"></div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="project.html?project=${project.id}">View project details <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></a>
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






