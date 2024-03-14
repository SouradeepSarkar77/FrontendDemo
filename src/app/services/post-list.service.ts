import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostList } from '../models/post-list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPostLists() : Observable<Array<PostList>> {
    return this.http.get<Array<PostList>>(this.serviceUrl);
  }
}
