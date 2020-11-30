import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  blogs: Array <any>=[];
  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.listBlog();
  }
  deletBlog(i){
    this.blogService.deleteBlog(i);
   this.blogs = this.blogService.listBlog();
    }
}
