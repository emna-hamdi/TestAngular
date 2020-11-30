import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  blogForm: FormGroup;
  id:any;
  submited: boolean = false;
  constructor(private blogService: BlogsService, private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('index');
    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      categorie: new FormControl('', [Validators.required]),
      date : new FormControl('', [Validators.required])
    });
    const blog = this.blogService.getBlogsbyid(this.id);
    this.blogForm.patchValue(blog);
  }
  updateBlog() {
    this.submited = true;
    if (this.blogForm.invalid) {
      return;
    }else
    {
      this.blogService.updateBlog(this.id,this.blogForm);
      this.route.navigateByUrl("/list");

    }
  }
}
