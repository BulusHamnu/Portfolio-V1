/* Variable */
import {blogs} from "../data/data.js"  ;
const blogListCont = document.querySelector(".blog-list")



if(blogs === 0) {
        document.querySelector(".blog-section").style.display = "none"
        document.querySelectorAll('a').forEach( link => {if (link.innerText == "BLOGS") link.style.display = "none"})
    } else {
        let allBlogs = "";
        blogs.forEach( blog => {
            let blogPost = `
                <article class="blog" >
                    <a href="${blog.link}"><h4 class="blog-title">${blog.title}.</h4></a>
                    <p class="blog-date">${blog.date}</p>
                    <p class="blog-content-preview">${blog.description}</p>
                    <a href="${blog.link}" class="button">Read More..</a>
                </article>
            
            `
            allBlogs += blogPost;

        });

        blogListCont.innerHTML = allBlogs;
 }








