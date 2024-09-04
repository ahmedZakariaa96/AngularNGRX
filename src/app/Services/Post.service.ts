import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http:HttpClient) { }


  GetPosts()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map((posts)=>posts||[]));
  }
}
