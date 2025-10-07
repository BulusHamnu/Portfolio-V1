/* Variable */
import { projects } from "../data/data.js";
const projectListCont = document.querySelector(".project-list");
const filename = window.location.pathname.slice(1).split(".")[0];

/* Display All projects */
let allProjects = "";
if (projects.length === 0) {
  projectListCont.classList.remove("grid-container");
  projectListCont.innerHTML = `<h1>No Project Yet.</h1>`;
} else {
  projects.forEach((project) => {
    if (filename === "index" && project.latest === false) return;
    let projectDetails = `
        <div class="project-card fade-in" data-animationtype="animate" data-projectid=${project.id}>
            <div class="project-cover">
                <img class="project-cover-placeholder" src="Asserts/images/placeholder-image.jpeg" alt="${project.title}">
                <img class="real-project-cover" src="${project.image}" alt="${project.title}">
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    
    `;

    allProjects += projectDetails;
  });

  projectListCont.innerHTML = allProjects;

  document.querySelectorAll(".project-card").forEach((projectCard) => {
    projectCard.addEventListener("click", (event) => {
      let id = projectCard.dataset.projectid;
      window.location.href = "project.html?project=" + id;
    });
  });

  // listen for cover images load and hide the place holders
  document.querySelectorAll(".project-cover").forEach((projectCover) => {
    const placeholderCoverImage = projectCover.querySelector(
      ".project-cover-placeholder"
    );
    const realCoverImage = projectCover.querySelector(".real-project-cover");

    // event listener
    realCoverImage.addEventListener("load", () => {
      realCoverImage.classList.add("loaded");
      placeholderCoverImage.style.display = "none";
    });
  });
}
