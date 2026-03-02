/* Variable */
import { projects } from "../data/data.js";

const projectContainer = document.querySelector(".project-details");

let url = new URL(window.location.href);
let projectId = url.searchParams.get("project");

if (projectId) {
  projects.forEach((project) => {
    if (project.id === parseInt(projectId)) {
      let techTypes = "";
      project.technologies.forEach((tech) => {
        let techType = "";
        techType = `<span>${tech}</span>`;
        techTypes += techType;
      });

      let projectDetail = `
                <h3><a href="projects.html">Back to projects</a></h3>
                    <h1 class="fade-in" data-animationtype="animate">${project.title}</h1>
                    <img class="image-cover-placeholder fade-in" data-animationtype="animate" src="Asserts/images/placeholder-image.jpeg" alt="${project.title}">

                    <img class="real-project-image loaded fade-in" data-animationtype="animate" src=${project.image} alt="${project.title}">

                    <div class="tags fade-in" data-animationtype="animate">${techTypes}</div>
                    <div class="project-buttons fade-in" data-animationtype="animate">
                        <a href="${project.link.demoUrl}" class="button projectDemo" target="_blank">Demo</a>
                        <a href="${project.link.git_hubUrl}" class="button-transparent" target="_blank">Code</a>
                    </div>
                    
                    <h2 class"fade-in" data-animationtype="animate">Description</h2>
                    <p class="fade-in" data-animationtype="animate">${project.description}.</p>
                
            `;

      projectContainer.innerHTML = projectDetail;
      if (!project.link.demoUrl) {
        document.querySelector(".projectDemo").style.display = "none";
      }

      // listen for cover images load and hide the place holders
      const placeholderCoverImage = document.querySelector(
        ".image-cover-placeholder",
      );
      const realCoverImage = document.querySelector(".real-project-image");

      // event listener
      realCoverImage.addEventListener("load", () => {
        placeholderCoverImage.style.display = "none";
      });
    }
  });
} else {
  projectContainer.innerHTML = "<H1>Folder is Empty</H1>";
}
