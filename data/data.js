/* My dynamic data */
export {projects,blogs}

  const projects = [
    {
        id : 1,
        image: "Asserts/Icons/DEMYSTUDIO.png",
        title: "Project 1",
        header : "lorewikipedia",
        description: "Description of project 1.",
        technologies: ["HTML", "CSS", "JavaScript","Live server"],
        link: {
            demoUrl: "Visit website",
            git_hubUrl: "https://example.com/project1"
        },
        latest : true,
    },
    {
        id : 2,
        image: "Asserts/Icons/DEMYSTUDIO.png",
        title: "Project 2",
        header : "lorewikipedia",
        description: "Description of project 2.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: {
            demoUrl: "Visit website",
            git_hubUrl: "https://example.com/project1"
        },
        latest : false,
    },
    {
        id : 3,
        image: "Asserts/Icons/DEMYSTUDIO.png",
        title: "Project 3",
        header : "lorewikipedia",
        description: "Description of project 3.",
        technologies: ["HTML", "CSS", "JavaScript","Php","MongoDb"],
        link: {
            demoUrl: "Visit website",
            git_hubUrl: "https://example.com/project1"
        }
        ,
        latest : true,
    },
    
];




  const blogs = [

    {
        image: "path/to/image1.jpg",
        title: "Blog 1",
        date : "20th December 2009",
        description: "Description of blog 1.",
        link: "https://example.com/Blog1",
    },
    {
        image: "path/to/image1.jpg",
        title: "Blog 2",
        date : "20th December 2025",
        description: "Description of blog 2.",
        link: "https://example.com/Blog2",
    },
    
];



