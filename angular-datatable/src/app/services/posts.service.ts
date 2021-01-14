import { PostModel } from './../models/Posts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.url}/${id}`)
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.url}?_sort=views&_order=desc`)
  }

  addPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.url, post, this.httpOptions)
  }

}
