const projects = [
  {
    id: 1,
    image: "asserts/images/demi_tasks_cover.png",
    title: "Demi-Tasks Mananger",
    description:
      "Demi Tasks Manager is a tool that helps you organize tasks, track progress, and analyze productivity. It allows you to create, edit, and delete tasks, add to-dos, attachments, and due dates, and categorize tasks for better organization. The dashboard provides an overview of tasks by status, while the integrated Vanilla Calendar helps with scheduling. Chart.js offers insights into task completion, and IndexedDB ensures large data storage, including files. Future updates will include reminders and notifications to enhance task management.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "IndexDb",
      "Chart.js",
      "Vanilla Calendar",
    ],
    link: {
      demoUrl: "https://demitasks.vercel.app/",
      git_hubUrl: "https://github.com/BulusHamnu/Demi-Tasks.git",
    },
    latest: true,
  },
  {
    id: 2,
    image:
      "https://svg-projects-card.onrender.com/api/bulushamnu/repos/readme-svg-projects-card?theme=dark",
    title: "Svg-Projects-Card",
    description:
      "Svg-Projects-Card is an API that queries GitHub repositories and generates beautiful SVG visualizations that can be embedded anywhere—on websites and, most importantly, in your GitHub README profile.I was inspired to create this after seeing a similar feature on DenverCoder1's GitHub profile, especially since I had just started learning backend development with Flask. I wanted something like that for my own profile, so I decided to build my own version.I also added a unique feature: the ability to include an imageUrl parameter, allowing users to add a project cover image to their cards.You can check the full documentation on how to use it on the docs page.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Flask_restful"],
    link: {
      demoUrl: "https://github.com/BulusHamnu/readme-svg-projects-card",
      git_hubUrl: "https://github.com/BulusHamnu/readme-svg-projects-card.git",
    },
    latest: true,
  },
  {
    id: 3,
    image: "asserts/images/exponential-en-cover-image.png",
    title: "Exponential Enlightenment",
    description:
      "Exponential Enlightenment is a portfolio and consulting website built for David Prorok to support and promote his coaching sessions. The platform showcases his courses, the monthly Full Moon Program designed to guide individuals through meditation toward inner peace and clarity, Boodi.AI, and a curated collection of transformational resources for those pursuing personal growth and enlightenment. The website is fully responsive and features four customizable themes, smooth scroll-based animations, and an integrated contact form for seamless communication.",
    technologies: ["HTML", "CSS", "JavaScript", "FormSpree API"],
    link: {
      demoUrl: "https://exponentialenlightenment.vercel.app/",
      git_hubUrl: "https://github.com/BulusHamnu/exponential-enlightenment.git",
    },
    latest: true,
  },
  {
    id: 4,
    image: "asserts/images/bulus_dev_cover.png",
    title: "Bulus-dev portfolio V1",
    description:
      "This is my personal portfolio website, designed to showcase my skills, projects, and experience as a developer. It includes an 'About Me' section where I share details about my background, education, and journey as a developer. The site also features a Dynamic Blogs section, where I write about my thoughts and share knowledge, and a Dynamic Projects section that highlights the work I’ve done. With a fully responsive design, the website ensures a great user experience on any device. Feel free to explore the site, and if you have any suggestions or feedback on how I can improve, don’t hesitate to reach out!",
    technologies: ["HTML", "CSS", "Javascript", "Formspree API"],
    link: {
      demoUrl: "https://bulusdev.vercel.app/",
      git_hubUrl: "https://github.com/BulusHamnu/Portfolio-V1.git",
    },
    latest: true,
  },
  {
    id: 5,
    image: "asserts/images/fewercharacter.png",
    title: "FewerCharacters",
    description:
      "This project is a web application that uses a backend server to interact with the OpenAI API to shorten a given text to fit within a specified character limit while preserving its meaning. The project supports multiple responses for varied summaries.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel Serverless", "Open Ai"],
    link: {
      demoUrl: "https://fewercharacters.vercel.app/",
      git_hubUrl: "https://github.com/BulusHamnu/fewerCharacters.git",
    },
    latest: true,
  },
  {
    id: 6,
    image: "asserts/images/demystudioIMG.png",
    title: "Demy's Studio",
    description:
      "Demy's Studio is a portfolio website for a photography studio to showcase its potential and display its work to the world. It features a responsive design built with Bootstrap's grid system and pre-built components. The website integrates with the Unsplash API to fetch high-quality images from various categories, such as products, events, and lifestyle. It also implements a pagination design to load and display more images as users scroll down.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Unsplash API",
      "Formspree API",
    ],
    link: {
      demoUrl: "https://bulushamnu.github.io/demys-studio/",
      git_hubUrl: "https://github.com/BulusHamnu/demys-studio.git",
    },
    latest: true,
  },
  // {
  //   id: 7,
  //   image: "asserts/images/yo_demy_cover.png",
  //   title: "Yo Demy Music",
  //   description:
  //     "Yo Demy Music is a personal website project I built for myself because I occasionally create music. Although I don't actively use it, I developed the site as part of my portfolio and to test my web development skills. The site features a home page, a music page, and a videos page. It also integrates the YouTube API to fetch artist videos from YouTube and embed them on the videos page. Additionally, there is Formspree API integration to handle form submissions and send them directly to the owner's email.",
  //   technologies: ["HTML", "CSS", "JavaScript", "YouTube API", "FormSpree API"],
  //   link: {
  //     demoUrl: "https://yodemymusic.vercel.app/",
  //     git_hubUrl: "https://github.com/BulusHamnu/yodemy-music.git",
  //   },
  //   latest: false,
  // },
];

export default projects;
