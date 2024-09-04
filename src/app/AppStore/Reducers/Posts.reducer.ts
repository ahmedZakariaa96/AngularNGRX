import { Action, createReducer, on } from "@ngrx/store";
import { Post } from "src/app/Models/Post";
import { getPosts } from "../Actions/Posts.Action";
import { state } from "@angular/animations";

export const initialState:ReadonlyArray<Post>=[]


export function postReducer(state:any,Action:any)
{
  return _postReducer(state,Action)
}

const _postReducer=createReducer(initialState,
  on(getPosts,(state,{posts})=>{
    return [...posts]
  })
  )


