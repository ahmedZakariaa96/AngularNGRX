import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/Models/Post";


export const getPosts=createAction('[Post API]  Post API Success',props<{posts:Post[]}>())

export const invokePostApi=createAction('[Post API] Invoke Api')
