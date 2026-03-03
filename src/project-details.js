/* Variable */
import projects from "../data/projects.js";

const projectContainer = document.querySelector(".project-details");

let url = new URL(window.location.href);
let projectId = url.searchParams.get("project");

const id = parseInt(projectId);
const selectedProject = projects.find((project) => project.id === id);

if (!projectId || !selectedProject) {
  projectContainer.innerHTML =
    "<H1 style='text-align: center;'>Project not found.</H1>";
  projectContainer.style = "margin-top: 7rem";
} else {
  let techTypes = "";
  selectedProject.technologies.forEach((tech) => {
    let techType = "";
    techType = `<span>${tech}</span>`;
    techTypes += techType;
  });

  let projectDetail = `
              <h3><a href="projects.html">Back to projects</a></h3>
              <h1 class="fade-in" data-animationtype="animate">${selectedProject.title}</h1>

              <img class="project-cover-image-placeholder fade-in" data-animationtype="animate" src="asserts/images/placeholder-image.jpeg" alt="${selectedProject.title}">

              <img class="real-project-cover-image loaded fade-in" data-animationtype="animate" src=${selectedProject.image} alt="${selectedProject.title}">

              <div class="tags fade-in" data-animationtype="animate">${techTypes}</div>
              <div class="project-buttons fade-in" data-animationtype="animate">
                  <a href="${selectedProject.link.demoUrl}" class="button projectDemo" target="_blank">Demo</a>
                  <a href="${selectedProject.link.git_hubUrl}" class="button-transparent" target="_blank">Code</a>
              </div>
              
              <h2 class"fade-in" data-animationtype="animate">Description</h2>
              <p class="fade-in" data-animationtype="animate">${selectedProject.description}.</p>
              
          `;

  projectContainer.innerHTML = projectDetail;
  if (!selectedProject.link.demoUrl) {
    document.querySelector(".projectDemo").style.display = "none";
  }

  // For monitoring project cover image
  const placeholderCoverImage = document.querySelector(
    ".project-cover-image-placeholder",
  );
  const realCoverImage = document.querySelector(".real-project-cover-image");
  realCoverImage.addEventListener("load", () => {
    placeholderCoverImage.style.display = "none";
  });
}
