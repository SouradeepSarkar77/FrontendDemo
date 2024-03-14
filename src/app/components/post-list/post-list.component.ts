import { Component, OnInit } from '@angular/core';
import { PostListService } from 'src/app/services/post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

  postListData: any;
  wordToBold = 'architecto';

  constructor(
    private dataService: PostListService
  ) {}

  ngOnInit(): void {
    this.dataService.getPostLists().subscribe((data: any) => {
      this.postListData = data;
      // console.log(data);
      // if(data.body == 'architecto'){
      //   this.boldWord
      // }
    });
  }

}
