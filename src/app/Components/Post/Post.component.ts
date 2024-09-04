import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts, invokePostApi } from 'src/app/AppStore/Actions/Posts.Action';
import { Post } from 'src/app/Models/Post';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-Post',
  templateUrl: './Post.component.html',
  styleUrls: ['./Post.component.css']
})
export class PostComponent implements OnInit {
  Posts:Observable<Post[]>;
  constructor(private store:Store<{posts:Post[]}> ,private postService:PostService ) {
    this.Posts=this.store.pipe(select('posts'));

  }
   ngOnInit() {
    debugger
    // this.postService.GetPosts().subscribe(res=>{

    //   this.store.dispatch(getPosts({posts:res as Post[]}))
    // })
    this.store.dispatch(invokePostApi())
  }

}
