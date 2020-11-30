import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }
  addBlog(blog){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs));
  }
  getBlogsbyid(id){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    return  blogs[id];
  }
  updateBlog(id,blogForm){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.splice(id,1,blogForm.value);
     localStorage.setItem('blogs',JSON.stringify(blogs));
  }
  deleteBlog(i){
    // console.log(i);
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.splice(i,1);
    localStorage.setItem('blogs',JSON.stringify(blogs));

  }
  listBlog(){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    return blogs;
  }
}
