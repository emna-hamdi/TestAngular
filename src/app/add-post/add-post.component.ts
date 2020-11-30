import { BlogsService } from './../services/blogs.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  blogForm: FormGroup;
  submited: boolean = false;
  constructor(private blogService: BlogsService, private route:Router) { }

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      categorie: new FormControl('', [Validators.required]),
      date : new FormControl('', [Validators.required])
    });
  }
  submitBlog() {
    this.submited = true;
    if (this.blogForm.invalid) {
      return;
    }
    this.blogService.addBlog(this.blogForm.value);
    this.route.navigateByUrl("/list");
  }
}
