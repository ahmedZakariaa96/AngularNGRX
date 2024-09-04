import { Injectable } from "@angular/core";
  import { PostService } from "src/app/Services/Post.service";
import { invokePostApi } from "../Actions/Posts.Action";
import { map, switchMap } from "rxjs";
import {  Actions, ofType, createEffect } from "@ngrx/effects";

@Injectable()
export class PostEffect {


  constructor(private action$ :Actions,private postService:PostService)
  {
    debugger

  }
    getPosts$=createEffect(()=>
   this.action$.pipe(ofType(invokePostApi),switchMap(()=>

    this.postService.GetPosts().pipe(map((  data )=>(

      {
         type:'[Post API]  Post API Success',posts:data
      }
    )))
  ))
  )
}


