import { UpdatePostComponent } from './update-post/update-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/register',
    pathMatch:'full'
  },
  {
    path: 'register',
    component: AddPostComponent
  },
  {
    path: 'list',
    component: ListPostComponent
  },
  {
    path: 'update/:index',
    component: UpdatePostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
