import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { BoldDirective } from './directives/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    TodoComponent,
    UserListComponent,
    HighlightDirective,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
