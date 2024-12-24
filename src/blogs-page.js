/* Variable */
import {blogs} from "../data/data.js"  ;
const blogListCont = document.querySelector(".blog-list")



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









