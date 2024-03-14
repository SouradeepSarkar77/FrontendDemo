import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component: PostListComponent
  },
  {
    path:'user-list',
    component: UserListComponent
  },
  {
    path:'todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
