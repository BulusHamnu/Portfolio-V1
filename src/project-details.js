/* Variable */
import {projects} from "../data/data.js"  ;

const projectContainer = document.querySelector(".project-details");

let url = new URL(window.location.href)
let projectId = url.searchParams.get("project")



if(projectId) {
    projects.forEach( project => {

        if(project.id === parseInt(projectId)) {
    
            let techTypes = "";
            project.technologies.forEach( tech => {
                let techType = "";
                techType  = `<span>${tech}</span>`;
                techTypes += techType;
            })
    
    
        
            let projectDetail = `
                <h3><a href="projects.html">Back to projects</a></h3>
                    <h1>${project.title}</h1>
                    <img src=${project.image} alt="${project.title}">
                    <div class="tags">${techTypes}</div>
                    <div class="project-buttons">
                        <a href="${project.link.demoUrl}" class="button projectDemo" target="_blank">Demo</a>
                        <a href="${project.link.git_hubUrl}" class="button-transparent" target="_blank">Code</a>
                    </div>
                    
                    <h2>Description</h2>
                    <p>${project.description}.</p>
                
            `
    
            projectContainer.innerHTML = projectDetail;
            if (!project.link.demoUrl) {document.querySelector(".projectDemo").style.display = "none";}
        }
    
        
    });
} else {
    projectContainer.innerHTML = "<H1>Folder is Empty</H1>";
}




